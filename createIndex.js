// Import the Pinecone library
import { Pinecone } from '@pinecone-database/pinecone';

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: 'YOUR_API_KEY' });

// Create a serverless index
const indexName = "example-index"

await pc.createIndex({
  name: indexName,
  dimension: 1024,
  metric: 'cosine',
  spec: { 
    serverless: { 
      cloud: 'aws', 
      region: 'us-east-1' 
    }
  } 
}); 

// Describe the endpoint of the created index
const indexInfo = await pc.describeIndex(indexName);
const endpoint = indexInfo.host;

console.log(`PineconeEndPoint: https://${endpoint}`);