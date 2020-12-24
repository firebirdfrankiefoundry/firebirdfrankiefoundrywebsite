using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace FirebirdFrankieFoundryAPI.Services
{

    [ApiExplorerSettings(IgnoreApi=true)]
    public class MongoService
    {
        MongoDB.Driver.MongoClient dbClient = new MongoClient("mongodb://localhost");
        public MongoService()
        {
        }

        public List<ExampleImage> GetPackage(int id)
        {
            var db = dbClient.GetDatabase("FirebirdFrankieFoundry");

            var filter = MongoDB.Driver.Builders<ExampleImage>.Filter.Eq("package", id);
            var exampleImages = db.GetCollection<ExampleImage>("ExampleArtworks").Find(filter).ToList();

            return exampleImages.ToList();
        }
    }
}
