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

        // [HttpGet]
        // public string Get()
        // {
        //     return "test";
        // }

        [HttpGet]
        public IList<ExampleImage> Get()
        {
            var mongoService = new MongoService();
            return mongoService.GetPackage(1);
        }
    }
}
