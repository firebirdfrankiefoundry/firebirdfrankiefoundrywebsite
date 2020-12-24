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
        [Route("package/{package_id}")]
        public IList<ExampleImage> Get(int package_id)
        {
            var mongoService = new MongoService();
            return mongoService.GetPackage(package_id);
        }
    }
}
