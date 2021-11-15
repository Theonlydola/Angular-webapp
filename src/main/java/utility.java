import javax.ws.rs.Path;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@Path("jsondata")
public class utility{

@GET
@Path("get100")
@SuppressWarnings("unchecked")
@Produces(MediaType.APPLICATION_JSON)
public Response getJSONdata( ){

JSONArray tickets =null;
JSONArray tickets_sub = new JSONArray();
JSONParser jsonParser = new JSONParser();

try (FileReader reader = new FileReader("/Users/mohamedadel/demo/tickets.json"))
{
 //Read JSON file
 Object obj = jsonParser.parse(reader);

 tickets = (JSONArray) obj;

for (int i=0;i<99;i++){ 
tickets_sub.add(tickets.get(i).toString());
} 


} catch (FileNotFoundException e) {
 e.printStackTrace();
} catch (IOException e) {
 e.printStackTrace();
} catch (org.json.simple.parser.ParseException e) {
// TODO Auto-generated catch block
 e.printStackTrace();
}


 return Response.ok(tickets_sub).build();

}

@POST
@Path("get2")
@Consumes(MediaType.APPLICATION_JSON)
@SuppressWarnings("unchecked")
@Produces(MediaType.APPLICATION_JSON)
public Response getJSONarray(JSONObject newticket ){
JSONArray tickets =null;
JSONArray tickets_s = new JSONArray();
JSONParser jsonParser = new JSONParser();

try (FileReader reader = new FileReader("/Users/mohamedadel/demo/tickets.json"))
{
 //Read JSON file
 Object obj = jsonParser.parse(reader);
 tickets = (JSONArray) obj;
 tickets_s.add(tickets.get(1).toString());
 tickets_s.add(newticket);
 

} catch (FileNotFoundException e) {
 e.printStackTrace();
} catch (IOException e) {
 e.printStackTrace();
} catch (org.json.simple.parser.ParseException e) {
// TODO Auto-generated catch block
 e.printStackTrace();
}


 return Response.ok(tickets_s).build();

}


 
}

