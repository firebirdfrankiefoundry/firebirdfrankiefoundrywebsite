using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FirebirdFrankieFoundryAPI
{
    public class ExampleImage
    {   
        public ObjectId _id {get;set;}

        [BsonElement("image")]
        public string Image64 { get; set; }

        [BsonElement("package")]
        public int Package { get; set; }

        [BsonElement("sortOrder")]
        public int SortOrder { get; set; }
    }
}
