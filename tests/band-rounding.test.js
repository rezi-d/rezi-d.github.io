// tests/band-rounding.test.js
// Unit test untuk aturan pembulatan IELTS resmi:
// Rata-rata pecahan berakhir .25 naik ke .5, berakhir .75 naik ke bilangan bulat berikutnya.

import { test } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Aturan pembulatan baku IELTS:
 * @param {number} val Nilai rata-rata mentah
 * @returns {number|null} Nilai band bulat kelipatan 0.5 (skala 0.0 - 9.0)
 */
export function roundIeltsBand(val) {
    if (typeof val !== 'number' || isNaN(val)) return null;
    const base = Math.floor(val);
    const remainder = Math.round((val - base) * 1000) / 1000;
    if (remainder < 0.25) return base;
    if (remainder < 0.75) return base + 0.5;
    return base + 1.0;
}

/**
 * Perhitungan Band Task Writing (rata-rata 4 kriteria: TA/TR, CC, LR, GRA)
 */
export function calculateTaskBand(ta, cc, lr, gra) {
    const avg = (ta + cc + lr + gra) / 4;
    return roundIeltsBand(avg);
}

/**
 * Perhitungan Band Keseluruhan Writing:
 * Band Writing = (Task 1 + 2 x Task 2) / 3, dibulatkan ke 0.5 terdekat
 */
export function calculateWritingBand(task1Band, task2Band) {
    const raw = (task1Band + 2 * task2Band) / 3;
    return roundIeltsBand(raw);
}

/**
 * Perhitungan Rata-rata 3 Subtes (L + R + W):
 * Hanya dihitung jika ketiganya lengkap dan dinilai
 */
export function calculateOverallLrw(listeningBand, readingBand, writingBand) {
    if (
        typeof listeningBand !== 'number' ||
        typeof readingBand !== 'number' ||
        typeof writingBand !== 'number'
    ) {
        return null;
    }
    const raw = (listeningBand + readingBand + writingBand) / 3;
    return roundIeltsBand(raw);
}

// -------------------------------------------------------------
// Test Suite: Aturan Pembulatan Fraksi IELTS (.25 dan .75)
// -------------------------------------------------------------

test('roundIeltsBand: bilangan bulat tetap sama', () => {
    assert.equal(roundIeltsBand(6.0), 6.0);
    assert.equal(roundIeltsBand(7.0), 7.0);
    assert.equal(roundIeltsBand(9.0), 9.0);
});

test('roundIeltsBand: fraksi < 0.25 dibulatkan ke bawah ke bilangan bulat', () => {
    assert.equal(roundIeltsBand(6.125), 6.0);
    assert.equal(roundIeltsBand(6.20), 6.0);
    assert.equal(roundIeltsBand(6.24), 6.0);
});

test('roundIeltsBand: fraksi tepat 0.25 naik ke 0.5', () => {
    assert.equal(roundIeltsBand(6.25), 6.5);
    assert.equal(roundIeltsBand(7.25), 7.5);
    assert.equal(roundIeltsBand(8.25), 8.5);
});

test('roundIeltsBand: fraksi antara 0.25 dan 0.75 dibulatkan ke 0.5', () => {
    assert.equal(roundIeltsBand(6.375), 6.5);
    assert.equal(roundIeltsBand(6.50), 6.5);
    assert.equal(roundIeltsBand(6.625), 6.5);
    assert.equal(roundIeltsBand(6.74), 6.5);
});

test('roundIeltsBand: fraksi tepat 0.75 naik ke bilangan bulat berikutnya', () => {
    assert.equal(roundIeltsBand(6.75), 7.0);
    assert.equal(roundIeltsBand(7.75), 8.0);
    assert.equal(roundIeltsBand(5.75), 6.0);
});

test('roundIeltsBand: fraksi > 0.75 dibulatkan ke bilangan bulat berikutnya', () => {
    assert.equal(roundIeltsBand(6.875), 7.0);
    assert.equal(roundIeltsBand(6.833), 7.0);
    assert.equal(roundIeltsBand(7.90), 8.0);
});

// -------------------------------------------------------------
// Test Suite: Formula Writing (Task 1 + 2 x Task 2) / 3
// -------------------------------------------------------------

test('calculateWritingBand: T1=6.0, T2=7.0 -> raw=6.666 -> Band 6.5', () => {
    const t1 = 6.0;
    const t2 = 7.0;
    assert.equal(calculateWritingBand(t1, t2), 6.5);
});

test('calculateWritingBand: T1=6.5, T2=7.0 -> raw=6.833 -> Band 7.0', () => {
    const t1 = 6.5;
    const t2 = 7.0;
    assert.equal(calculateWritingBand(t1, t2), 7.0);
});

test('calculateWritingBand: T1=6.0, T2=6.5 -> raw=6.333 -> Band 6.5', () => {
    const t1 = 6.0;
    const t2 = 6.5;
    assert.equal(calculateWritingBand(t1, t2), 6.5);
});

test('calculateWritingBand: T1=7.5, T2=8.0 -> raw=7.833 -> Band 8.0', () => {
    const t1 = 7.5;
    const t2 = 8.0;
    assert.equal(calculateWritingBand(t1, t2), 8.0);
});

test('calculateWritingBand: T1=8.0, T2=7.0 -> raw=7.333 -> Band 7.5', () => {
    const t1 = 8.0;
    const t2 = 7.0;
    assert.equal(calculateWritingBand(t1, t2), 7.5);
});

// -------------------------------------------------------------
// Test Suite: Formula Rata-rata 3 Subtes (L + R + W)
// -------------------------------------------------------------

test('calculateOverallLrw: L=6.5, R=6.0, W=6.5 -> raw=6.333 -> 6.5', () => {
    assert.equal(calculateOverallLrw(6.5, 6.0, 6.5), 6.5);
});

test('calculateOverallLrw: L=7.0, R=7.5, W=6.5 -> raw=7.0 -> 7.0', () => {
    assert.equal(calculateOverallLrw(7.0, 7.5, 6.5), 7.0);
});

test('calculateOverallLrw: L=6.5, R=7.0, W=7.0 -> raw=6.833 -> 7.0', () => {
    assert.equal(calculateOverallLrw(6.5, 7.0, 7.0), 7.0);
});

test('calculateOverallLrw: belum lengkap mengembalikan null', () => {
    assert.equal(calculateOverallLrw(6.5, 6.0, null), null);
    assert.equal(calculateOverallLrw(null, 6.0, 6.5), null);
});
