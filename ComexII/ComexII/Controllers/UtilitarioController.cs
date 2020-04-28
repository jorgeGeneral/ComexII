using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ComexII.Controllers
{
    public class UtilitarioController : Controller
    {
        // GET: Utilitario
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ComexIITramosPorSegmento()
        {
            return View();
        }
        public ActionResult ComexIIParametroControlCompraDivisa()
        {
            return View();
        }
        public ActionResult ComexIIControlTiempoCompraDivisa()
        {
            return View();
        }
        public ActionResult ComexIIParametrizacionGastos()
        {
            return View();
        }
        public ActionResult ComexIIParametros()
        {
            return View();
        }
    }
}