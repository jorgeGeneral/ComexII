using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ComexII.Controllers
{
    public class ClienteController : Controller
    {
        // GET: Cliente
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ComexIIMatrizTarifado()
        {
            return View();
        }

        public ActionResult ComexIIPreciosEspeciales()
        {
            return View();
        }

        public ActionResult ComexIIRutCliente()
        {
            return View();
        }

        public ActionResult ComexIIRutClientePreciosEspeciales()
        {
            return View();
        }
    }
}