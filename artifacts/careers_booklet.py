"""14-page parent booklet for LEVEL UP Careers. Facts follow the site."""

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

pdfmetrics.registerFont(TTFont("L", "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("B", "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("I", "/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf"))

W, H = A4
ML, MR = 46, 46
TOP = H - 52
BOT = 40
ORANGE = (1, 0.310, 0)
BLUE = (0, 0.365, 0.72)
INK = (0.11, 0.11, 0.11)
MUTED = (0.38, 0.38, 0.38)
LINE = (0.86, 0.86, 0.86)
WASH = (0.98, 0.965, 0.95)
SOFT = (1, 0.95, 0.91)

OUT = "/workspace/artifacts/LEVEL-UP-Careers-for-parents.pdf"


def wrap(c, text, font, size, width):
    lines, cur = [], ""
    for word in text.split():
        trial = (cur + " " + word).strip()
        if c.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines or [""]


class Page:
    def __init__(self, c, number, kicker):
        self.c = c
        self.n = number
        self.y = TOP
        self.low = H
        c.setFillColor(ORANGE)
        c.rect(0, 0, 7, H, fill=1, stroke=0)
        c.setFillColor(ORANGE)
        c.setFont("B", 8)
        c.drawString(ML, H - 32, "LEVEL UP CAREERS")
        c.setFillColor(MUTED)
        c.setFont("L", 8)
        c.drawRightString(W - MR, H - 32, kicker)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.6)
        c.line(ML, H - 40, W - MR, H - 40)
        c.setFillColor(MUTED)
        c.setFont("L", 8)
        c.drawString(ML, 24, "Level Up Academy  ·  Sector 7, Rohini  ·  98102 13960")
        c.drawRightString(W - MR, 24, f"{number}  /  14")
        c.setStrokeColor(LINE)
        c.line(ML, 36, W - MR, 36)

    def gap(self, n=10):
        self.y -= n

    def h1(self, text):
        self.y -= 4
        self.c.setFillColor(INK)
        self.c.setFont("B", 20)
        for line in wrap(self.c, text, "B", 20, W - ML - MR):
            self.c.drawString(ML, self.y, line)
            self.y -= 24
        self.low = min(self.low, self.y)
        self.y -= 2

    def lede(self, text):
        self.y = self.para(text, "L", 11, MUTED, 15)
        self.y -= 6

    def para(self, text, font="L", size=10, color=INK, leading=13.4, indent=0, width=None):
        width = width or (W - ML - MR - indent)
        self.c.setFillColor(color)
        self.c.setFont(font, size)
        for line in wrap(self.c, text, font, size, width):
            self.c.drawString(ML + indent, self.y, line)
            self.y -= leading
        self.low = min(self.low, self.y)
        return self.y

    def bullet(self, title, body):
        self.c.setFillColor(ORANGE)
        self.c.circle(ML + 3, self.y + 3, 2.2, fill=1, stroke=0)
        self.c.setFillColor(INK)
        self.c.setFont("B", 10.5)
        self.c.drawString(ML + 14, self.y, title)
        self.y -= 14
        self.para(body, "L", 9.5, MUTED, 12.6, indent=14)
        self.y -= 7

    def row(self, left, right, band=False):
        h = 28
        if band:
            self.c.setFillColor(WASH)
            self.c.roundRect(ML, self.y - 8, W - ML - MR, h, 4, fill=1, stroke=0)
        self.c.setFillColor(INK)
        self.c.setFont("B", 9.5)
        self.c.drawString(ML + 8, self.y + 2, left)
        self.c.setFillColor(MUTED)
        self.c.setFont("L", 9)
        self.c.drawRightString(W - MR - 8, self.y + 2, right)
        self.y -= h
        self.low = min(self.low, self.y)


def cover(c):
    c.setFillColor(ORANGE)
    c.rect(0, 0, 10, H, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.setFont("B", 12)
    c.drawString(56, H - 72, "LEVEL UP")
    c.setFillColor(BLUE)
    c.drawString(128, H - 72, "CAREERS")
    c.setStrokeColor(ORANGE)
    c.setLineWidth(2)
    c.line(56, H - 88, 180, H - 88)
    c.setFillColor(INK)
    c.setFont("B", 36)
    y = H - 150
    for line in ["A short map", "for Class 10", "parents."]:
        c.drawString(56, y, line)
        y -= 42
    c.setFillColor(MUTED)
    c.setFont("L", 12)
    lines = wrap(
        c,
        "Commerce is not only CA. PCM is not only engineering. PCB is not only MBBS. This booklet is the same map as the LEVEL UP Careers site, printed so a family can sit with it.",
        "L",
        12,
        430,
    )
    y -= 8
    for line in lines:
        c.drawString(56, y, line)
        y -= 17
    # four chips
    y -= 28
    chips = [
        ("1", "Pick a stream"),
        ("2", "If not the plan"),
        ("3", "Three names"),
        ("4", "Compare"),
    ]
    x = 56
    for num, label in chips:
        c.setFillColor(SOFT)
        c.roundRect(x, y - 8, 112, 52, 8, fill=1, stroke=0)
        c.setFillColor(ORANGE)
        c.setFont("B", 14)
        c.drawString(x + 12, y + 22, num)
        c.setFillColor(INK)
        c.setFont("B", 8.5)
        for i, bit in enumerate(wrap(c, label, "B", 8.5, 88)):
            c.drawString(x + 12, y + 4 - i * 11, bit)
        x += 122
    y -= 70
    c.setFillColor(INK)
    c.setFont("B", 11)
    c.drawString(56, y, "Developed by Level Up Academy")
    y -= 16
    c.setFillColor(MUTED)
    c.setFont("L", 10)
    for line in [
        "Maths Masters of Rohini & Pitampura",
        "Sector 7, Rohini, Main Metro Road, next to Naturals",
        "Call 98102 13960    ·    Instagram @levelup.academy.official",
        "Classes 8 to 12. CBSE, foundation, CUET and JEE.",
    ]:
        c.drawString(56, y, line)
        y -= 14
    c.setFillColor(MUTED)
    c.setFont("I", 8.5)
    c.drawString(56, 48, "October 2026. Dates and percentages move. The institute’s own page wins.")


def page2(c):
    p = Page(c, 2, "How to use this")
    p.h1("Sit with it in this order.")
    p.lede("You do not have to read every course in India tonight. Four moves are enough. The website holds the long page on each name.")
    p.bullet("Pick the subjects.", "Commerce with Maths, PCM, PCB, or PCMB. The list of courses changes after this. You can change the stream later. Do not pick from a relative’s sentence.")
    p.bullet("Read the “if not” page.", "If not CA. If not engineering. If not MBBS. That page is the one families actually need. The famous exam is still there. It is not the only door.")
    p.bullet("Write three names.", "Not thirty. One can be the obvious plan. One should be a door you had not considered. One should be a degree you would still respect if the famous exam misses.")
    p.bullet("Compare those three.", "Maths needed or not. Years. The fee, in a real number. The exam. The job. Page 12 is the sheet. Page 14 is blank so you can write.")
    p.gap(8)
    p.c.setFillColor(ORANGE)
    p.c.setFont("B", 9)
    p.c.drawString(ML, p.y, "WHAT THIS BOOKLET WILL NOT DO")
    p.y -= 16
    p.para("It will not admit a child. It will not quote a salary as a promise. It does not list every private college with an advertisement. A college with a full-page ad and no exam is left out on purpose.", "L", 9.5, INK, 12.6)
    p.y -= 4
    p.para("If someone sells an IIT seat, an IIM seat, or a government MBBS seat, leave the room. Those institutes do not sell undergraduate seats.", "L", 9.5, INK, 12.6)
    p.gap(16)
    p.h1("Where each page goes.")
    items = [
        ("3", "The four streams, and what each one closes"),
        ("4 – 6", "If not CA, if not engineering, if not MBBS"),
        ("7 – 8", "Other ways into an IIT or an IIM, and AI"),
        ("9 – 11", "When to act, the exams, the rest of the map"),
        ("12 – 14", "How to compare, what marks do, a page to write on"),
    ]
    for num, label in items:
        p.c.setFillColor(ORANGE)
        p.c.setFont("B", 10)
        p.c.drawString(ML, p.y, num)
        p.c.setFillColor(INK)
        p.c.setFont("L", 10.5)
        p.c.drawString(ML + 52, p.y, label)
        p.y -= 18


def page3(c):
    p = Page(c, 3, "The subjects")
    p.h1("Four streams. Four different lists.")
    p.lede("Class 11 percentage is almost never the form. The subjects are. Dropping one subject in Class 11 closes a whole list in Class 12.")
    blocks = [
        ("Commerce with Maths", "Accounts, business, and maths.", "Opens CA, CS, CMA, CUET colleges, IPMAT, law, design, and the online IIT and IIM bachelor’s that allow any stream.", "Closes JEE and NEET. A commerce student does not sit those papers."),
        ("Science PCM", "Physics, chemistry, maths.", "Opens engineering, NDA’s technical wings, research, architecture and planning, and also CA and law.", "Closes NEET. Medicine that needs biology is not on this list."),
        ("Science PCB", "Physics, chemistry, biology.", "Opens NEET and the other health doors. CA, law, design and hotels still are, because they do not ask for biology.", "Closes JEE. Computer science through JoSAA is not this stream."),
        ("PCMB", "Maths and biology both.", "Both lists. You can sit JEE and NEET. The “if not engineering” page and the “if not MBBS” page both apply.", "Dropping either subject later is the mistake. You chose both. Keep both through Class 12."),
    ]
    for title, line, opens, closes in blocks:
        h = 92
        p.c.setStrokeColor(LINE)
        p.c.setFillColor((1, 1, 1))
        p.c.setLineWidth(0.8)
        p.c.roundRect(ML, p.y - h + 14, W - ML - MR, h, 6, fill=0, stroke=1)
        p.c.setFillColor(ORANGE)
        p.c.rect(ML, p.y - h + 14, 4, h, fill=1, stroke=0)
        p.c.setFillColor(INK)
        p.c.setFont("B", 12)
        p.c.drawString(ML + 14, p.y, title)
        p.c.setFillColor(MUTED)
        p.c.setFont("I", 9)
        p.c.drawString(ML + 14, p.y - 13, line)
        p.y -= 28
        p.para(opens, "L", 9, INK, 11.6, 14, W - ML - MR - 28)
        p.para(closes, "L", 9, MUTED, 11.6, 14, W - ML - MR - 28)
        p.y -= 12


def page4(c):
    p = Page(c, 4, "Commerce")
    p.h1("If not CA, then what?")
    p.lede("CA is a long professional course, not a personality. Do a college degree beside it. Do not register for three institutes in the same month.")
    rows = [
        ("CA, if you still want it", "ICAI. Start after Class 12. Foundation, then Intermediate, then Final, plus articleship. There is no famous board cutoff on the current Foundation route. Old sites still say 50%. Check ICAI in the month you register."),
        ("Company Secretary", "Company law, board meetings, filings. Not a job buying and selling shares. The body is ICSI. After Class 12 the first exam is CSEET. Keep a degree beside it."),
        ("CMA", "What a product or a factory actually costs. The body is ICMAI. Foundation does not ask for a high percentage. It is not a shortcut around CA if you wanted CA."),
        ("Five-year law", "CLAT. About 45% in Class 12 for General, EWS and OBC, about 40% for SC and ST. NLU Delhi is a different exam, AILET. The job is law, not a second B.Com."),
        ("BMS at Sukhdev", "Delhi University. You need maths. The exam is CUET: one language, maths, and a general test. The board percentage does not decide the seat. Class 11 marks are not used."),
        ("B.Com (Hons), Delhi", "CUET, then a second form called CSAS. Missing CSAS can lose the seat. A 98% in the board exam does not admit you by itself. Maths is not compulsory, but it gives a second way to be scored."),
        ("Actuary", "You price risk, mostly for insurance. The first exam is ACET. Maths is not always written as compulsory, and the papers are maths. Without maths, do not start. Associate is often 4 to 6 years. Many people stop."),
        ("Five-year IIM, IPM", "You join an IIM after Class 12 and stay about five years. IPMAT Indore, IPMAT Rohtak, and JIPMAT are different papers. The fee over five years runs high. Talk about the money before you buy mock tests."),
    ]
    for title, body in rows:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML, p.y, title)
        p.y -= 13
        p.para(body, "L", 9, MUTED, 11.8)
        p.y -= 6


def page5(c):
    p = Page(c, 5, "PCM")
    p.h1("If not engineering, then what?")
    p.lede("Engineering is one door. A drop year is only one of the others. Fill more than one form in the Class 12 year. “We will see” is how a year disappears.")
    rows = [
        ("If you still want engineering", "Use the rank. JEE Main, then Advanced for the IIT B.Tech. Also BITSAT, a state exam, and in Delhi JAC for DTU, NSUT and IIIT-Delhi. JAC and JoSAA are different websites. A different engineering college is still engineering."),
        ("Maths that is not a B.Tech", "ISI and CMI have their own written tests, harder than school maths and quieter than an IIT. A newer ISI degree, statistical data science, uses CUET or a JEE Main score instead. That one needs maths and English, and about 75% by their formula."),
        ("Design, architecture, planning", "UCEED is B.Des at IITs. It is not JEE Advanced. JEE Main Paper 2 is architecture, and also planning at the Schools of Planning and Architecture. Planning is not B.Tech."),
        ("A uniform", "NDA is a written exam and then SSB. The technical wings want PCM. The merchant navy is a different form. Read that page before you mix the two."),
        ("Pilot", "A real licence, and a real bill. It can cost more than a flat. Do not put it in the same sentence as CA."),
        ("CA, law, economics", "These do not care that the marksheet says science. CUET opens economics and BMS if the child has maths. A CA test series does not prepare anyone for CLAT."),
        ("Research", "IISER and NISER, through IAT or NEST. This is for a student who did not want placement week. Teaching through an RIE of NCERT is a four-year degree, not a sad B.Ed after drifting."),
        ("If the rank stings", "Open this list the same week. Do not wait for a family meeting in August. A drop year needs a written plan and a date. Most of these forms do not reopen because the mood improved."),
    ]
    for title, body in rows:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML, p.y, title)
        p.y -= 13
        p.para(body, "L", 9, MUTED, 11.8)
        p.y -= 5


def page6(c):
    p = Page(c, 6, "PCB and PCMB")
    p.h1("If not MBBS, then what?")
    p.lede("The NEET rank did not land a government seat, or the private fee is a house. BDS and AYUSH are not jokes, and they are also not “almost MBBS”.")
    rows = [
        ("Fill the counselling you already earned", "Fill MCC and the state counselling even if the rank feels average. Seats move. A Delhi student fills both MCC and Delhi’s own NEET counselling. One form does not include the other."),
        ("Health, but not MBBS", "Dentistry, AYUSH, veterinary, nursing, pharmacy, physiotherapy, speech and hearing. NEET is not the form for every one of these. Missing the second form is how people say nothing else was possible."),
        ("Names families do not hear", "AIISH Mysuru for speech and hearing. NIRTAR Cuttack for occupational therapy. Lady Irwin, Delhi, for nutrition, through CUET. Government veterinary and agriculture colleges. Vet often uses NEET. Agriculture often uses CUET."),
        ("Write the private fee down", "A private MBBS can cost more than the other degrees combined. A debt is also a decision. Government nursing, pharmacy and veterinary seats are the ones to hunt. No agent sells a government MBBS seat."),
        ("If health is not the life", "CA, law, design and hotels do not ask for biology. Say which one you mean. Do not join AYUSH as a costume. Join it only if you will practise that system."),
        ("PCMB, read this twice", "You can sit JEE and NEET. Page 5 and this page are both yours. Class 11 percentage is almost never the form. Dropping maths closes engineering. Dropping biology closes medicine. Keep both."),
    ]
    for title, body in rows:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML, p.y, title)
        p.y -= 13
        p.para(body, "L", 9, MUTED, 12)
        p.y -= 7
    p.gap(4)
    p.para("AIIMS MBBS is still NEET. AIIMS nursing and the allied courses have their own notices. “NEET will cover it” is how those forms get missed.", "I", 9.5, INK, 12.4)


def page7(c):
    p = Page(c, 7, "Hidden doors")
    p.h1("Other ways into an IIT or an IIM.")
    p.lede("The front door is JEE Advanced, CAT, or NEET. It is not the only door. None of these is a donation seat. A side door is a different degree, not the famous salary with the famous work skipped.")
    rows = [
        ("IIT Madras, online", "Four online bachelor’s degrees. Data science, and management with data science, take any stream. Electronic systems and aeronautics want physics and maths. The qualifier is not JEE. You are not in the Chennai hostel."),
        ("IIT Guwahati, data science and AI", "Online. Any stream may apply. About 60% in Class 12. If you never registered for JEE Advanced, the mathematics qualifier is compulsory. Not JoSAA."),
        ("ISI, statistical data science", "Delhi, Kolkata, Bengaluru. You attend that centre. Maths and English. About 75% by their formula, lower for SC, ST and PwBD. CUET, or a JEE Main score if you could sit JEE. Not the old ISI written test. That test is still B.Stat and B.Math. PCB without maths does not enter."),
        ("IIT Patna CET", "Science on the form, about 60%. Artificial intelligence or data analytics. This is continuing education, not the JEE B.Tech. The class is maths and code. A NEET score does not make the classroom biology."),
        ("IIM Bangalore, online BBA", "Digital business. Three years. Not the MBA and not a hostel. Class 10 maths, and a Class 12 percentage floor. Their test, or a CUET general-test score, or a JEE Main score, in the years the notice allows. Do not quote the MBA salary."),
        ("IIM Kozhikode BMS", "Four years, on the campus. Any stream. Their own aptitude test and an interview. Class 10 and 12 marks sit in the shortlist. Not IPMAT. Not the two-year MBA."),
        ("IIM Udaipur BBA", "Online. Any stream. No entrance exam on the current note. Not a hostel."),
        ("IPM, and design", "IPMAT and JIPMAT are the on-campus five-year IIM route. High fee. UCEED is design at IITs, and several campuses take a student who will never clear Advanced. IIM Lucknow’s campus AI degree is the opposite: PCM, and only if you qualified JEE Advanced."),
    ]
    for title, body in rows:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10)
        p.c.drawString(ML, p.y, title)
        p.y -= 12.5
        p.para(body, "L", 8.7, MUTED, 11.2)
        p.y -= 5


def page8(c):
    p = Page(c, 8, "AI")
    p.h1("AI, only if this stream can enter.")
    p.lede("A weekend certificate is not on this list. There is no Class 12 course called medical AI. The degree has to match the subjects.")
    blocks = [
        ("Commerce with Maths", "IIT Guwahati, if the maths qualifier is real. ISI statistical data science, through CUET, if maths and English are on the marksheet. IIT Madras data science, and the management-and-data degree, both online. BCA, if you have maths and not PCM. IIT Jodhpur’s off-campus applied AI wants maths and about 60%. IIM Bangalore’s online BBA is business, not a model-building degree."),
        ("PCM", "Everything in the commerce list that needs maths, plus computer science through JEE, IIIT Hyderabad’s own exam, IIT Patna CET, and IIM Lucknow’s campus AI degree. Lucknow is residential and only if you qualified JEE Advanced. Do not describe it as an online BBA."),
        ("PCB", "IIT Madras data science and the management sibling, and IIT Guwahati, if Class 12 maths is something this child can face. IIT Patna’s form says science, and the class is still maths and code. Biology, then a computation degree later, is the honest medical-and-code path. There is no MBBS called AI."),
        ("PCMB", "Both lists. You can keep the JEE computer-science door and the biology door. You still cannot invent a course the institute does not run."),
    ]
    for title, body in blocks:
        p.c.setFillColor(WASH)
        # measure
        lines = wrap(p.c, body, "L", 9, W - ML - MR - 24)
        h = 22 + len(lines) * 12
        p.c.roundRect(ML, p.y - h + 16, W - ML - MR, h, 6, fill=1, stroke=0)
        p.c.setFillColor(ORANGE)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML + 12, p.y, title)
        p.y -= 16
        p.para(body, "L", 9, INK, 12, 12, W - ML - MR - 24)
        p.y -= 10
    p.para("IIT Jodhpur’s applied AI is off-campus, with a partner. Read the institute page before you pay. An early exit from an online degree is a certificate or a diploma. Call it that.", "I", 9, MUTED, 12)


def page9(c):
    p = Page(c, 9, "When")
    p.h1("What to do in which year.")
    p.lede("Most bachelor’s forms close in the Class 12 year. CAT, CFA, bank PO and UPSC are after a degree. They are not a Class 12 panic.")
    stages = [
        ("Class 11", "The percentage is almost never the form. Commerce: keep maths and accounts clear. Do not drop maths if you want Sukhdev, economics, or actuarial science. PCM: do not drop physics or maths. The JEE syllabus starts this year, whether or not you join a batch. PCB: biology is half of NEET. PCMB: dropping either subject closes a list. This is also the year to notice a second interest, so June is not only one form."),
        ("Class 12", "Register for one professional course, not three, and join a college the same year. CA, CS and CMA are not a substitute for a campus. Fill the main exam and at least one other form in the same season. A side door missed in June does not reopen because you were busy with the main exam. Protect the board percentage. Some doors use it. Most ranks do not come from it."),
        ("Result week", "If the rank is the one you hoped for, take the seat and read the fee. If it is not, open the “if not” page the same week. Counselling still moves. A drop year is allowed. It needs a new method and a date. Attempt two of a professional exam can be reasonable. Attempt five with no change is not."),
        ("In college", "This is when CAT, CFA, FRM, bank PO, RBI, UPSC and the teaching exams begin. CFA is not a Class 12 plan. The fee is in dollars, and Level 1 is usually the last year of college. A licence from NISM is for a named job, not five certificates collected for a feeling of progress."),
    ]
    for title, body in stages:
        p.c.setFillColor(ORANGE)
        p.c.setFont("B", 11)
        p.c.drawString(ML, p.y, title)
        p.y -= 15
        p.para(body, "L", 9.5, INK, 12.5)
        p.y -= 10


def page10(c):
    p = Page(c, 10, "Exams")
    p.h1("The exams that actually matter.")
    p.lede("Not every state exam. These are the ones a Class 10 parent keeps hearing. Each one has its own form.")
    head_y = p.y
    p.c.setFillColor(INK)
    p.c.rect(ML, head_y - 6, W - ML - MR, 20, fill=1, stroke=0)
    p.c.setFillColor((1, 1, 1))
    p.c.setFont("B", 8)
    p.c.drawString(ML + 8, head_y, "EXAM")
    p.c.drawString(ML + 118, head_y, "WHO")
    p.c.drawString(ML + 230, head_y, "WHAT IT OPENS")
    p.y = head_y - 22
    rows = [
        ("CUET", "After 12", "Delhi University and many central universities. B.Com, economics, BMS, and a lot of B.Sc."),
        ("JEE Main", "PCM", "NITs, IIITs, the door to Advanced, and JAC Delhi."),
        ("JEE Advanced", "PCM, after Main", "The IIT B.Tech. Not the online degrees."),
        ("NEET", "PCB or PCMB", "MBBS, BDS, and some other health seats. Not every health course."),
        ("CLAT", "Any stream", "Five-year law. AILET is separate, for NLU Delhi."),
        ("CA Foundation", "After 12", "The start of CA. Keep a degree beside it."),
        ("CSEET", "After 12", "The start of Company Secretary."),
        ("IPMAT, JIPMAT", "Maths, in practice", "The five-year IIM. A high fee."),
        ("UCEED", "Design", "B.Des at IITs. Not JEE Advanced."),
        ("NCHM JEE", "Hotel", "The hotel degree. Not a hobby course."),
        ("NDA", "Then SSB", "Defence. Technical wings want PCM."),
    ]
    for i, (exam, who, what) in enumerate(rows):
        lines = wrap(p.c, what, "L", 8, 250)
        h = max(22, 8 + len(lines) * 11)
        if i % 2 == 0:
            p.c.setFillColor(WASH)
            p.c.rect(ML, p.y - h + 14, W - ML - MR, h, fill=1, stroke=0)
        p.c.setFillColor(INK)
        p.c.setFont("B", 8.5)
        p.c.drawString(ML + 8, p.y, exam)
        p.c.setFont("L", 8)
        p.c.setFillColor(MUTED)
        p.c.drawString(ML + 118, p.y, who)
        p.c.setFillColor(INK)
        yy = p.y
        for line in lines:
            p.c.drawString(ML + 230, yy, line)
            yy -= 11
        p.y -= h
    p.y -= 12
    p.para("One coaching test series does not cover all of these. A CA series does not sit CLAT. JEE coaching does not sit UCEED, IPMAT, or the IIT Madras qualifier.", "I", 9, MUTED, 12)


def page11(c):
    p = Page(c, 11, "The rest of the map")
    p.h1("Names worth knowing.")
    p.lede("Each of these has a full page on the site: the marks, the exam, the job, and who should avoid it. This is only so a parent has heard the name before the counselling week.")
    groups = [
        ("Design, beyond a poster", "UCEED and NID and NIFT are different forms. Jewellery, textile, footwear, film and game design are real college courses, not hobbies you add in the last month. Interior and animation have their own pages."),
        ("Work that is not a desk", "Hotel management through NCHM. Pilot, and cabin crew, which is not the same licence. Aircraft maintenance. Chefs. Aviation on the ground is not the cockpit."),
        ("After the degree, not now", "CAT for the IIMs, FMS and others. XAT, SNAP and NMAT are different MBA exams. ISB is not CAT. CFA and FRM start in college. RBI, SEBI, UPSC and bank PO want a graduate."),
        ("Money, carefully", "The stock market is not one course. A degree is the floor. A NISM licence is for one named job. A Telegram tip channel is none of these. Trading the family’s money is not a career plan."),
        ("A life with a stage", "Journalism, film, acting, music, dance, photography. There are institutes. There is no paper that guarantees the life. Keep a degree the family can explain."),
        ("Delhi, in one paragraph", "Commerce seats that people mean are mostly CUET. HR, NM College and Mithibai are mostly Maharashtra board seats. NMIMS is a different exam, NPAT. Engineering in the city is JAC, from the JEE Main rank. Medicine is MCC plus Delhi’s own counselling."),
    ]
    for title, body in groups:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML, p.y, title)
        p.y -= 13
        p.para(body, "L", 9, MUTED, 11.8)
        p.y -= 7


def page12(c):
    p = Page(c, 12, "Compare")
    p.h1("Three seats. Not a ranking of India.")
    p.lede("Put three courses next to each other. A fourth pushes the oldest one off. The point is to see the difference, not to collect names.")
    headers = ["", "Seat 1", "Seat 2", "Seat 3"]
    # example filled lightly
    table = [
        ("Course", "CA", "Company Secretary", "B.Com (Hons), DU"),
        ("Maths", "The papers use it", "Not the point of the job", "Useful, not compulsory"),
        ("Years", "Long, plus articleship", "Long, beside a degree", "Three years"),
        ("The fee", "Institute fees. A degree beside it", "Cheaper than a private MBA", "A public college, if CUET lands"),
        ("The exam", "CA Foundation", "CSEET", "CUET, then CSAS"),
        ("The job", "Audit, tax, accounts", "Company law and filings", "A base. Then a job or a course"),
        ("Avoid if", "You want a campus and nothing else", "You wanted CA and this is a costume", "You think 98% in boards is the seat"),
    ]
    col_w = [92, 128, 140, 140]
    xs = [ML]
    for w_ in col_w[:-1]:
        xs.append(xs[-1] + w_)
    # header
    p.c.setFillColor(INK)
    p.c.rect(ML, p.y - 8, sum(col_w), 22, fill=1, stroke=0)
    p.c.setFillColor((1, 1, 1))
    p.c.setFont("B", 8)
    for x, htxt, w_ in zip(xs, headers, col_w):
        p.c.drawString(x + 6, p.y, htxt)
    p.y -= 26
    for r, row in enumerate(table):
        heights = []
        wrapped = []
        for cell, w_ in zip(row, col_w):
            lines = wrap(p.c, cell, "L", 7.6, w_ - 12)
            wrapped.append(lines)
            heights.append(len(lines))
        h = 8 + max(heights) * 10
        if r % 2 == 0:
            p.c.setFillColor(WASH)
            p.c.rect(ML, p.y - h + 12, sum(col_w), h, fill=1, stroke=0)
        for x, lines, w_ in zip(xs, wrapped, col_w):
            p.c.setFillColor(INK if lines == wrapped[0] else MUTED)
            p.c.setFont("B" if lines == wrapped[0] else "L", 7.6)
            yy = p.y
            for line in lines:
                p.c.drawString(x + 6, yy, line)
                yy -= 10
        p.y -= h
    p.y -= 14
    p.para("This row is an example, so you can see the shape. It is not a recommendation of CA over the others. Swap in the three names your child will actually say out loud.", "I", 9, MUTED, 12)
    p.y -= 8
    p.para("Ask one more question the table does not show: who should avoid this. A course can be good and still be wrong for this child. The website says that in one paragraph on every page.", "L", 9.5, INK, 12.5)


def page13(c):
    p = Page(c, 13, "Marks")
    p.h1("What the marks do, and do not.")
    p.lede("A blank box is not a zero. If you do not know a number yet, leave it unknown. Do not invent 95 to feel better, and do not type 0 because the field was empty.")
    points = [
        ("Class 10 does not choose the stream.", "It does show up later in a few shortlists. IIM Kozhikode’s BMS uses Class 10 and Class 12 marks before the interview. IIM Bangalore’s online BBA wants mathematics on the Class 10 certificate. That is not the same as “your Class 10 percentage picked CA”."),
        ("Class 11 is a working year.", "Almost no form asks for the Class 11 percentage. The year still matters, because the Class 12 subjects are already being set. Dropping maths or biology now is the decision. The form comes later."),
        ("Class 12 is a gate, not usually the rank.", "Pass, with the right subjects. Some courses then add a floor: CLAT’s percentage, IIT Guwahati’s 60%, ISI’s way of counting 75%. A very high board score does not, by itself, open SRCC, Sukhdev, an IIT, or a government medical college."),
        ("The rank comes from the paper.", "CUET, JEE, NEET, CLAT, IPMAT, UCEED, CA Foundation. Coaching posters that still print an old cutoff are often wrong. Check the institute in the month you register."),
        ("Category changes some floors.", "CLAT is lower for SC and ST. ISI’s aggregate is lower for SC, ST and PwBD. A general-category number copied from a reel is not your number. Read the notice that names the category."),
        ("Fees are a mark you can write down.", "“We will manage” is not a number. A private MBBS, pilot training, a five-year IIM, and a private BBA are different kinds of expensive. A public college, CA, CS and CMA are not in that sentence."),
    ]
    for title, body in points:
        p.c.setFillColor(INK)
        p.c.setFont("B", 10.5)
        p.c.drawString(ML, p.y, title)
        p.y -= 13
        p.para(body, "L", 9, MUTED, 11.8)
        p.y -= 6


def page14(c):
    p = Page(c, 14, "Write it here")
    p.h1("Three courses. In pencil.")
    p.lede("One obvious plan. One door you had not considered. One you would still respect if the famous exam misses. Then take this page to the conversation at home.")
    # stream row
    p.c.setFillColor(INK)
    p.c.setFont("B", 9)
    p.c.drawString(ML, p.y, "Stream")
    labels = ["Commerce + Maths", "PCM", "PCB", "PCMB"]
    x = ML + 58
    for lab in labels:
        p.c.setStrokeColor(INK)
        p.c.setLineWidth(0.8)
        p.c.circle(x, p.y + 3, 5, fill=0, stroke=1)
        p.c.setFont("L", 9)
        p.c.drawString(x + 10, p.y, lab)
        x += 112
    p.y -= 22
    p.c.setFont("L", 9)
    p.c.setFillColor(MUTED)
    p.c.drawString(ML, p.y, "Student")
    p.c.setStrokeColor(LINE)
    p.c.setLineWidth(0.7)
    p.c.line(ML + 52, p.y - 2, ML + 250, p.y - 2)
    p.c.drawString(ML + 270, p.y, "Class")
    p.c.line(ML + 308, p.y - 2, W - MR, p.y - 2)
    p.y -= 16
    seats = ["The obvious plan", "A door we had not considered", "If that exam misses"]
    for i, seat in enumerate(seats):
        p.c.setFillColor(ORANGE)
        p.c.setFont("B", 8)
        p.c.drawString(ML, p.y, f"0{i+1}")
        p.c.setFillColor(INK)
        p.c.setFont("B", 10)
        p.c.drawString(ML + 22, p.y, seat)
        p.y -= 14
        fields = ["Course", "Exam", "Years and fee, in a real number", "Why this child, and why not"]
        for field in fields:
            p.c.setFillColor(MUTED)
            p.c.setFont("L", 8)
            p.c.drawString(ML + 22, p.y, field)
            p.c.setStrokeColor(LINE)
            p.c.line(ML + 150, p.y - 2, W - MR, p.y - 2)
            p.y -= 14
        p.y -= 4
    p.y -= 2
    p.c.setFillColor(SOFT)
    p.c.roundRect(ML, 48, W - ML - MR, 78, 6, fill=1, stroke=0)
    p.c.setFillColor(INK)
    p.c.setFont("B", 9)
    p.c.drawString(ML + 12, 108, "When you want the long page")
    p.c.setFont("L", 8.5)
    p.c.setFillColor(MUTED)
    text = "Open LEVEL UP Careers. Pick the same stream. Search the course, the exam, or the life. The page has the marks, the paper, the job, and who should leave it alone. Level Up Academy, Sector 7, Rohini, Main Metro Road, next to Naturals. 98102 13960. @levelup.academy.official."
    y = 94
    for line in wrap(p.c, text, "L", 8.5, W - ML - MR - 24):
        p.c.drawString(ML + 12, y, line)
        y -= 11


def main():
    c = canvas.Canvas(OUT, pagesize=A4)
    c.setTitle("LEVEL UP Careers — a short map for Class 10 parents")
    c.setAuthor("Level Up Academy")
    cover(c)
    c.showPage()
    for fn in (page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14):
        fn(c)
        c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
