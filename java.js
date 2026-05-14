{import org.springframework-StylePropertyMapReadOnly.Controller;
import "org.springframework.ui.Model;
import "; org.springframework.web.bind.anotation.GetMapping;}

@Controller
public class saludadorcontroller {

    @GetMapping("/hola") // Cuando el usuario entre a /hola
    public string saludar (Model model) {
        model.addAttribute("mensaje", "¡Hola, mundo!");
        return "saludo"; //busca un  achivo llamado indice,.html
    }