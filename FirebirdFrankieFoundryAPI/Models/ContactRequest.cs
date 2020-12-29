using System;

namespace FirebirdFrankieFoundryAPI
{
    public class ContactRequest
    {   
        public string Name { get; set; }
        public string Category { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string CompanyName { get; set; }
        public string Message { get; set; }
    }
}
