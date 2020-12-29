using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FirebirdFrankieFoundryAPI.Services
{

    [ApiExplorerSettings(IgnoreApi = true)]
    public class EmailService
    {
        public EmailService()
        {
        }

        public void SendEmail(ContactRequest contactRequest)
        {
            ProcessStartInfo start = new ProcessStartInfo();
            start.FileName = "C:/Python39/python.exe";
            string cmd = "D:/Clients/FF/Website/firebirdfrankiefoundrywebsite/FirebirdFrankieFoundryAPI/Services/EmailSender.py";
            string args = $"\"{contactRequest.Name}\" \"{contactRequest.Category}\" \"{contactRequest.Email}\" \"{contactRequest.PhoneNumber}\" \"{contactRequest.CompanyName}\"  \"{contactRequest.Message}\"";
            start.Arguments = string.Format("{0} {1}", cmd, args);
            start.UseShellExecute = false;
            start.RedirectStandardOutput = true;
            using (Process process = Process.Start(start))
            {
                using (StreamReader reader = process.StandardOutput)
                {
                    string result = reader.ReadToEnd();
                    Console.Write(result);
                }
            }
        }
    }
}
