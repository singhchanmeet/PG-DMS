# importing required modules
from PyPDF2 import PdfReader
from difflib import SequenceMatcher

# creating a pdf reader object
reader = PdfReader('8061.pdf')
reader2 = PdfReader('myfile2.pdf')

# getting a specific page from the pdf file
page = reader.pages[0]
page2 = reader2.pages[0]

# extracting text from page
text = ""
text2 = ""

for i in range(len(reader.pages)):
    text += reader.pages[i].extract_text()

for i in range(len(reader2.pages)):
    text2 += reader2.pages[i].extract_text()


ab = SequenceMatcher(None, text,
                             text2).ratio() * 100


print(ab)
