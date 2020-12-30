import smtplib
import sys

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.header import Header

smtp = smtplib.SMTP('smtp.gmail.com', 587)
smtp.ehlo()
smtp.starttls()
smtp.login("lemmingzkun@gmail.com", "2Daedric2handle")

msg = MIMEMultipart("alternative")
msg["Subject"] = Header(sys.argv[2] + " query from "+sys.argv[1] + (" of "+sys.argv[5] if len(sys.argv[5]) > 0 else ""))
msg["To"] = "rentonmcintyre@yahoo.com"
msg["From"] = "queries@firebirdfrankiefoundry.com"

sys.argv[6] = sys.argv[6].replace("\n", "<br>")

text = """\
<html>
    <body>
        <b>Name:</b> {} <br>        
        <b>Company:</b> {} <br>
        <b>Email:</b> {} <br>
        <b>Phone Number:</b> {} <br>
        <b>Category:</b> {} <br>
        <b>Message:</b> {} <br>
    </body>
</html>
""".format(sys.argv[1], sys.argv[5], sys.argv[3], sys.argv[4], sys.argv[2], sys.argv[6])

msg.attach(MIMEText(text, "html"))

smtp.sendmail("queries@firebirdfrankiefoundry.com", "rentonmcintyre@yahoo.com", msg.as_string())
smtp.close()

#python EmailSender.py "Test Person" "Test Category" "testperson@gmail.com" "+27777" "Hi, I'm a fake person and this is <br> a new message"