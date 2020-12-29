using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FirebirdFrankieFoundryAPI.Services;

namespace FirebirdFrankieFoundryAPI.Controllers
{
    [Route("api")]
    public class FirebirdFrankieFoundryController : ControllerBase
    {
        public FirebirdFrankieFoundryController()
        {
        }

        [HttpGet]
        [Route("package/{package_id}")]
        public IList<ExampleImage> Get(int package_id)
        {
            var mongoService = new MongoService();
            return mongoService.GetPackage(package_id);
        }

        [HttpPost]
        [Route("email")]
        public void EmailQuery([FromBody] ContactRequest contactRequest)
        {
            var emailService = new EmailService();
            emailService.SendEmail(contactRequest);   
        }
    }
}
