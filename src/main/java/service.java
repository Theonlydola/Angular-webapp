import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("service")
public class service {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response testFUnction() {
        System.out.println("testing rest service");
        return Response.ok().build();
    }
}
