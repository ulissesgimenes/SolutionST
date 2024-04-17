using Microsoft.AspNetCore.Mvc;

namespace WebApplicationST.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
