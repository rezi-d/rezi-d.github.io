#!/usr/bin/env python3
"""
scripts/generate_listening_audio.py
Synthesize official-style IELTS Listening Audio for Practice Test 1 (Sections 1-4)
Using Microsoft Edge Neural British & Australian voices with exam pauses.
"""

import asyncio
import os
import sys

try:
    import edge_tts
except ImportError:
    print("edge_tts not found in standard path, trying user site-packages...")
    sys.path.append(os.path.expanduser("~/Library/Python/3.9/lib/python/site-packages"))
    import edge_tts

OUTPUT_DIR = "storage/listening/test1"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Helper to generate individual segment
async def generate_segment(text, voice, out_path):
    comm = edge_tts.Communicate(text, voice)
    await comm.save(out_path)

# Helper to generate SSML
async def generate_ssml(ssml_text, voice, out_path):
    comm = edge_tts.Communicate(ssml_text, voice)
    await comm.save(out_path)

async def build_section_1():
    print("Generating Section 1: Community Photography Club...")
    out_file = os.path.join(OUTPUT_DIR, "s1.mp3")
    
    # We will assemble multi-voice dialog by generating dialog lines and combining
    dialog_script = [
        # Intro & Question 1-5 preview
        ("narrator", "Section 1. You will hear a telephone conversation between an applicant and a community center secretary. First, you have some time to look at Questions 1 to 5."),
        ("pause", 18),
        ("narrator", "Now listen carefully and answer Questions 1 to 5."),
        
        # Dialogue Part 1 (Questions 1-5)
        ("sarah", "Good morning, Oakwood Heritage and Photography Society. Sarah speaking, how may I help you?"),
        ("marcus", "Oh hello! I am calling to enquire about becoming a member of your photography club and possibly booking some of your darkroom facilities?"),
        ("sarah", "Wonderful! We are always eager to welcome new photographers. Let me take down a few details first. Could I have your surname, please?"),
        ("marcus", "Yes, it is Patterson."),
        ("sarah", "Right. Is that spelt P-A-T-T-E-R-S-O-N?"),
        ("marcus", "Exactly, with a double T."),
        ("sarah", "Thank you. And your current residential address, Marcus?"),
        ("marcus", "Well, I used to live at 8 Green Lane, but last month I moved to 14 Bramble Way."),
        ("sarah", "14 Bramble Way. And the postcode there?"),
        ("marcus", "It is EH9 4TB."),
        ("sarah", "EH9 4TB, got it. Now, regarding membership categories, we offer standard adult membership at 45 pounds annually, but if you are currently studying, our student tier is just 25 pounds."),
        ("marcus", "That's great! I am currently enrolled full-time at the university art academy, so the student membership would be ideal."),
        ("sarah", "Excellent. All new members must attend a short mandatory induction session before they are issued a keycard. Our next available slot is on the 24th of November at 6 PM. Does that suit you?"),
        ("marcus", "Yes, the 24th of November is in my diary."),
        
        # Pause for Questions 6-10
        ("narrator", "Before you hear the rest of the conversation, you have some time to look at Questions 6 to 10."),
        ("pause", 18),
        ("narrator", "Now listen and answer Questions 6 to 10."),
        
        # Dialogue Part 2 (Questions 6-10)
        ("sarah", "Now, let me explain our equipment lending policies. Members can borrow professional telephoto lenses for weekend shoots. There is no hire fee, but we do require a refundable deposit of 30 pounds per item."),
        ("marcus", "Fair enough. And what about the chemical darkrooms?"),
        ("sarah", "Because space is limited to four workstations, we ask everyone to book their slot at least 48 hours in advance."),
        ("marcus", "That makes sense. And do you host any public showcases?"),
        ("sarah", "We certainly do. Every autumn, our members' best works are displayed at the annual community exhibition, which is held in the historic Town Hall."),
        ("marcus", "Fantastic. Should I bring my camera and heavy tripod along to the induction?"),
        ("sarah", "No need for heavy tripods on your first day. What we really ask each newcomer to bring is a digital portfolio containing 5 to 10 photos you've taken recently, so our mentors can gauge your technical interests."),
        ("marcus", "I will prepare that on a USB drive. I've always admired the society's historic photo archives."),
        ("sarah", "Yes, the club was actually founded seventy years ago with the specific mission to document and protect local historic buildings from post-war demolition."),
        ("marcus", "What a noble origin. Thank you so much for the information, Sarah."),
        ("sarah", "You are very welcome, Marcus. See you on the 24th!"),
        
        # Outro
        ("narrator", "That is the end of Section 1. You now have half a minute to check your answers."),
        ("pause", 20)
    ]
    
    voices = {
        "narrator": "en-GB-RyanNeural",
        "sarah": "en-GB-SoniaNeural",
        "marcus": "en-GB-ThomasNeural"
    }
    
    parts_data = []
    for role, text in dialog_script:
        if role == "pause":
            # Generate silent mp3 frames
            # A silent mp3 chunk can be simulated with silence ssml or empty audio
            ssml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB"><voice name="en-GB-RyanNeural"><break time="{text * 1000}ms"/></voice></speak>'
            comm = edge_tts.Communicate(ssml, "en-GB-RyanNeural")
            temp_path = f"/tmp/p_silence_{text}.mp3"
            if not os.path.exists(temp_path):
                await comm.save(temp_path)
            with open(temp_path, "rb") as f:
                parts_data.append(f.read())
        else:
            voice = voices.get(role, "en-GB-RyanNeural")
            comm = edge_tts.Communicate(text, voice)
            temp_part = f"/tmp/p_{role}_{hash(text) % 100000}.mp3"
            await comm.save(temp_part)
            with open(temp_part, "rb") as f:
                parts_data.append(f.read())
    
    with open(out_file, "wb") as f:
        for p in parts_data:
            f.write(p)
    print(f"✓ Section 1 generated: {out_file} ({os.path.getsize(out_file)} bytes)")


async def build_section_2():
    print("Generating Section 2: City Botanical Garden...")
    out_file = os.path.join(OUTPUT_DIR, "s2.mp3")
    
    speaker_voice = "en-AU-NatashaNeural" # Friendly Australian curator accent
    narrator_voice = "en-GB-RyanNeural"
    
    script_p1 = (
        "Good morning everyone, and a warm welcome to the City Botanical Garden! "
        "I am Dr. Fiona Campbell, head of visitor engagement. We are delighted to have you join our volunteer cohort. "
        "Before we assign your specific operational teams, please take a look at the orientation map on your clipboards. "
        "You will notice that right now, we are assembled at the Main Entrance, located at the very southern edge of the garden grounds. "
        "As you look directly ahead along the main central avenue, you will see our famous Central Fountain in the circular plaza. "
        "If you head past the fountain and take the winding gravel lane branching towards the north-west, "
        "you will arrive at the Tropical Fern Pavilion, marked as A on your plan. It houses over three hundred species of rare cloud-forest ferns. "
        "Now, if you instead walk due west from the central fountain, past our perennial flowerbeds, you will reach the edge of the Western Stream. "
        "Right on the embankment stands our elevated Riverside Bird Sanctuary Deck, labeled as B, which is an ideal spot for observing migratory herons. "
        "For your personal convenience, right near where we are standing at the south entrance, just down the path to your left on the south-west side, "
        "is our South Facility, shown as C. That is where you will find the volunteer lockers, changing rooms, and our staff tea area. "
        "Now looking towards the northern perimeter: if you walk past the central fountain and branch along the north-east walkway, "
        "you will find our experimental research plots and the Medicinal Herb Nursery, designated as letter D. "
        "Please remind guests that plants in plot D are strictly for scientific observation. "
        "Finally, along the broad eastern avenue, occupying the wide sunlit lawns at letter E, is our Historic Rose Collection Grounds, famous for its Elizabethan shrub roses."
    )
    
    script_p2 = (
        "Now, let's talk about how your duties will be divided across our three core volunteer teams: "
        "the Education Team, the Horticultural Team, and the Visitor Welcoming Team. "
        "If you are placed on the Education Team, your primary assignment will be leading interactive science tours for primary school excursions. "
        "These take place every Tuesday and Thursday morning. "
        "For those with green thumbs who join the Horticultural Maintenance Team, your tasks will include hands-on garden upkeep, "
        "such as pruning our heirloom apple trees and assisting with winter grafting. "
        "In addition, members of this team are responsible for monitoring our automated soil moisture sensors inside the heated greenhouses each morning. "
        "Lastly, the Visitor Welcoming Team is the frontline face of our gardens. "
        "You will assist staff with checking admission wristbands at the entry gates, and most importantly, "
        "helping elderly visitors by distributing motorized wheelchairs from the accessibility desk. "
        "Whatever your role, your contribution ensures our botanical sanctuary remains welcoming to all."
    )
    
    timeline = [
        ("narrator", narrator_voice, "Section 2. You will hear an orientation talk given by Dr. Fiona Campbell to newly recruited volunteer guides at the City Botanical Garden and Arboretum. First, you have some time to look at Questions 11 to 15."),
        ("pause", narrator_voice, 20),
        ("narrator", narrator_voice, "Now listen carefully and answer Questions 11 to 15."),
        ("speaker", speaker_voice, script_p1),
        ("narrator", narrator_voice, "Before you hear the rest of the talk, you have some time to look at Questions 16 to 20."),
        ("pause", narrator_voice, 20),
        ("narrator", narrator_voice, "Now listen and answer Questions 16 to 20."),
        ("speaker", speaker_voice, script_p2),
        ("narrator", narrator_voice, "That is the end of Section 2. You now have half a minute to check your answers."),
        ("pause", narrator_voice, 20)
    ]
    
    parts_data = []
    for tag, voice, content in timeline:
        if tag == "pause":
            ssml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB"><voice name="{voice}"><break time="{content * 1000}ms"/></voice></speak>'
            comm = edge_tts.Communicate(ssml, voice)
            tmp = f"/tmp/p_silence_{content}.mp3"
            if not os.path.exists(tmp):
                await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
        else:
            comm = edge_tts.Communicate(content, voice)
            tmp = f"/tmp/s2_{tag}_{hash(content) % 100000}.mp3"
            await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
                
    with open(out_file, "wb") as f:
        for p in parts_data:
            f.write(p)
    print(f"✓ Section 2 generated: {out_file} ({os.path.getsize(out_file)} bytes)")


async def build_section_3():
    print("Generating Section 3: Academic Phytoremediation Tutorial...")
    out_file = os.path.join(OUTPUT_DIR, "s3.mp3")
    
    voices = {
        "narrator": "en-GB-RyanNeural",
        "prof": "en-GB-RyanNeural",
        "chloe": "en-GB-SoniaNeural",
        "liam": "en-GB-ThomasNeural"
    }
    
    dialog = [
        ("narrator", "Section 3. You will hear two environmental science students, Chloe and Liam, discussing their thesis project with their academic supervisor, Professor Walker. First, you have some time to look at Questions 21 to 25."),
        ("pause", 20),
        ("narrator", "Now listen carefully and answer Questions 21 to 25."),
        
        ("prof", "Come in Chloe, Liam. Have a seat. How are things progressing with your final-year research proposal on freshwater remediation?"),
        ("liam", "Thanks, Professor Walker. We've narrowed down our focal study area to the lower Blackwood River basin."),
        ("prof", "An intriguing choice. What led you to that specific stretch of river?"),
        ("chloe", "Well, initially we thought about studying agricultural fertilizer runoff, but water quality records revealed staggering levels of synthetic azo dyes and industrial chemical runoff originating from the textile mills along the north bank."),
        ("liam", "Exactly. The local community has been expressing serious concern about discoloration in the water."),
        ("prof", "Indeed, textile effluents present a formidable ecological hazard. And which biological agent have you decided to deploy for your phytoremediation trials?"),
        ("liam", "We've settled on water hyacinths—Eichhornia crassipes."),
        ("prof", "A well-known hyperaccumulator. What clinched that decision over duckweed or reed beds?"),
        ("chloe", "While duckweed is effective, water hyacinths exhibit an astonishingly rapid biomass accumulation. In warm conditions, their root systems can double in surface area within just six days, providing immense surface contact for contaminant uptake."),
        ("prof", "A sound rationale. But I reviewed the preliminary bench test data you submitted last Friday. There was an evident anomaly in your absorption curves on days three and four. What happened there?"),
        ("liam", "That was our biggest mistake, Professor. We conducted those early trials in the old laboratory annex where the thermostat was faulty. Ambient room temperatures fluctuated wildly between day and night, which disrupted the plants' metabolic transpiration rates."),
        ("prof", "Temperature control is critical in botanical assays. How do you plan to mitigate that variance for your main experiment?"),
        ("chloe", "We wondered if we should just cut out the extreme data points, the outliers?"),
        ("prof", "Absolutely not! You must never artificially discard inconvenient data. The scientifically rigorous remedy is to expand your sample size. By increasing the number of replicate test tanks running simultaneously under controlled conditions, any anomalous variance will be statistically normalized."),
        ("liam", "Understood. We will set up six replicate tanks per dye concentration instead of two."),
        
        ("narrator", "Before you hear the rest of the discussion, you have some time to look at Questions 26 to 30."),
        ("pause", 20),
        ("narrator", "Now listen and answer Questions 26 to 30."),
        
        ("prof", "Good. Now, take me through your finalized laboratory protocol, step by step."),
        ("chloe", "Certainly. In Stage 1, we will gather fresh wastewater samples directly downstream from the primary drainage outlets of the textile plant."),
        ("liam", "In Stage 2, before introducing any vegetation, we will run baseline assays to quantify initial levels of suspended dyes as well as toxic heavy metals, specifically chromium and copper."),
        ("chloe", "In Stage 3, the hyacinths are transferred into the test vats. To ensure the roots don't suffocate from stagnant conditions, we will continuously regulate dissolved oxygen using an automated electric air pump."),
        ("liam", "In Stage 4, after seven days of exposure, we harvest the root tissues and perform infrared spectroscopy to map the exact chemical bonding of the absorbed dyes."),
        ("chloe", "And finally, Stage 5: because the harvested plants now contain concentrated toxic compounds, they cannot be composted. We have arranged for their safe disposal through controlled high-heat incineration in the chemistry department furnace."),
        ("prof", "That is an exceptionally thorough methodology. Now, your department seminar is next Tuesday. What is your immediate priority before then?"),
        ("chloe", "We already have our literature review and safety forms filed, so our main task over the weekend is to finalize the statistical comparison graphs and chart layouts for the presentation slides."),
        ("prof", "Splendid. I look forward to seeing your slides on Monday morning!"),
        
        ("narrator", "That is the end of Section 3. You now have half a minute to check your answers."),
        ("pause", 20)
    ]
    
    parts_data = []
    for role, text in dialog:
        if role == "pause":
            ssml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB"><voice name="en-GB-RyanNeural"><break time="{text * 1000}ms"/></voice></speak>'
            comm = edge_tts.Communicate(ssml, "en-GB-RyanNeural")
            tmp = f"/tmp/p_silence_{text}.mp3"
            if not os.path.exists(tmp):
                await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
        else:
            voice = voices.get(role, "en-GB-RyanNeural")
            comm = edge_tts.Communicate(text, voice)
            tmp = f"/tmp/s3_{role}_{hash(text) % 100000}.mp3"
            await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
                
    with open(out_file, "wb") as f:
        for p in parts_data:
            f.write(p)
    print(f"✓ Section 3 generated: {out_file} ({os.path.getsize(out_file)} bytes)")


async def build_section_4():
    print("Generating Section 4: Biomimetic Architecture Lecture...")
    out_file = os.path.join(OUTPUT_DIR, "s4.mp3")
    
    lecturer_voice = "en-IE-ConnorNeural" # Academic Irish/British lecturer voice
    narrator_voice = "en-GB-RyanNeural"
    
    p1 = (
        "Good afternoon, colleagues. In today's lecture on sustainable urban design, we are going to explore the burgeoning discipline of biomimicry—specifically, "
        "how architects are looking to nature's most sophisticated subterranean builders, the termites, to revolutionize building climate control. "
        "Modern urban architecture faces a profound ecological dilemma. Conventional high-rise buildings rely overwhelmingly on power-hungry heating, ventilation, and air conditioning—or HVAC systems. "
        "These systems consume massive amounts of grid-generated electricity, primarily derived from burning fossil fuels. "
        "Furthermore, the chemical refrigerants utilized in large chillers continue to produce potent greenhouse gas emissions, exacerbating the urban heat island effect."
    )
    
    p2 = (
        "To discover a low-carbon alternative, architects turned to the tropical savannas of southern Africa. "
        "Here, Macrotermes termites construct earthen mounds up to nine meters tall. The remarkable feat is this: "
        "while outside ambient temperatures fluctuate wildly from near freezing at night to over 45 degrees Celsius in the scorching desert afternoon, "
        "the interior of the termite mound remains remarkably stable at precisely 30 degrees Celsius. "
        "Why is this precise thermal regulation so vital? Because deep within the nest, the termites cultivate vast underground gardens of specialized fungus. "
        "This fungus serves as the colony's primary food source, and it will perish if the temperature deviates by even a few degrees."
    )
    
    p3 = (
        "So how does a mound built of nothing more than soil, saliva, and wood pulp achieve this thermal feat without mechanical power? "
        "The secret lies in passive convective airflow. As millions of termites metabolize and respire in the lower galleries, warm air is generated. "
        "Following basic physics, this warm, stale air rises through a towering central chimney and vents out into the atmosphere. "
        "As this hot air escapes above, it creates a subtle negative pressure differential at the base of the mound. "
        "This vacuum continuously draws in fresh, cooler air through thousands of microscopic subterranean flues located at ground level. "
        "The air travels through deep underground channels where the cool earth chills it before it enters the living chambers."
    )
    
    p4 = (
        "This extraordinary mechanism directly inspired the Zimbabwean architect Mick Pearce when designing the Eastgate Centre, "
        "a massive shopping and office complex constructed in Harare in 1996. "
        "The Eastgate Centre possesses no conventional electrical cooling or refrigeration equipment whatsoever. "
        "Instead, Pearce employed biomimicry. The building is constructed with massive slabs of exposed concrete. "
        "During the intense daylight hours, these high thermal mass materials steadily absorb heat without warming the interior air. "
        "Then, as the temperature plunges during the night, low-powered automated fans are switched on. "
        "These fans flush the stored daytime heat out through a series of vertical rooftop chimneys, simultaneously cooling the concrete mass so it can absorb heat again the following morning. "
        "The ecological and economic outcomes have been staggering. The Eastgate Centre consumes 35 percent less energy than conventional office blocks in Harare, "
        "saving the building owners over three and a half million dollars in maintenance and energy costs over its operational lifetime. "
        "Biomimicry reminds us that after four billion years of evolutionary refinement, nature has already solved the engineering challenges we grapple with today."
    )
    
    timeline = [
        ("narrator", narrator_voice, "Section 4. You will hear an academic lecture delivered by Dr. Raymond Cross on sustainable architecture and biomimetic ventilation systems. First, you have some time to look at Questions 31 to 40."),
        ("pause", narrator_voice, 20),
        ("narrator", narrator_voice, "Now listen carefully and answer Questions 31 to 40."),
        ("lecturer", lecturer_voice, p1),
        ("lecturer", lecturer_voice, p2),
        ("lecturer", lecturer_voice, p3),
        ("lecturer", lecturer_voice, p4),
        ("narrator", narrator_voice, "That is the end of Section 4. You now have half a minute to check your answers."),
        ("pause", narrator_voice, 20),
        ("narrator", narrator_voice, "That is the end of the listening test. You now have ten minutes to transfer your answers to your answer sheet.")
    ]
    
    parts_data = []
    for tag, voice, content in timeline:
        if tag == "pause":
            tmp = f"/tmp/p_silence_{content}.mp3"
            if not os.path.exists(tmp):
                ssml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB"><voice name="{voice}"><break time="{content * 1000}ms"/></voice></speak>'
                comm = edge_tts.Communicate(ssml, voice)
                await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
        else:
            comm = edge_tts.Communicate(content, voice)
            tmp = f"/tmp/s4_{tag}_{abs(hash(content)) % 100000}.mp3"
            await comm.save(tmp)
            with open(tmp, "rb") as f:
                parts_data.append(f.read())
                
    with open(out_file, "wb") as f:
        for p in parts_data:
            f.write(p)
    print(f"✓ Section 4 generated: {out_file} ({os.path.getsize(out_file)} bytes)")


async def main():
    if not os.path.exists(os.path.join(OUTPUT_DIR, "s1.mp3")):
        await build_section_1()
    if not os.path.exists(os.path.join(OUTPUT_DIR, "s2.mp3")):
        await build_section_2()
    if not os.path.exists(os.path.join(OUTPUT_DIR, "s3.mp3")):
        await build_section_3()
    await build_section_4()
    print("\n🎉 ALL 4 IELTS LISTENING SECTIONS GENERATED SUCCESSFULLY!")

if __name__ == "__main__":
    asyncio.run(main())
