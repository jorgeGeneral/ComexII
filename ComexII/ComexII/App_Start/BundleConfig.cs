using System.Web;
using System.Web.Optimization;

namespace ComexII
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // para la producción, use la herramienta de compilación disponible en https://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            // General
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js", "~/Scripts/general.js", "~/Scripts/CargaCombo.js", "~/Scripts/CargaGrilla.js"));

            // Pestaña Cliente
            bundles.Add(new ScriptBundle("~/bundles/ConsultaPrecios").Include(
                      "~/Scripts/Cliente/consultaPrecios.js"));

            // Pestaña Gestion
            bundles.Add(new ScriptBundle("~/bundles/ConsultaTarifas").Include(
                      "~/Scripts/Gestion/consultaTarifas.js"));

            bundles.Add(new ScriptBundle("~/bundles/historicoPE").Include(
                      "~/Scripts/Gestion/historicoPE.js"));

            bundles.Add(new ScriptBundle("~/bundles/consultaCampanas").Include(
                      "~/Scripts/Gestion/consultaCampanas.js"));

            bundles.Add(new ScriptBundle("~/bundles/ingresoPE").Include(
                      "~/Scripts/Gestion/ingresoPE.js"));

            bundles.Add(new ScriptBundle("~/bundles/vencimientoPE").Include(
                      "~/Scripts/Gestion/vencimientoPE.js"));

            // Pestaña Utilitario
            bundles.Add(new ScriptBundle("~/bundles/mantParametros").Include(
                      "~/Scripts/Utilitario/mantParametros.js"));

            bundles.Add(new ScriptBundle("~/bundles/mantTramos").Include(
                      "~/Scripts/Utilitario/mantTramos.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
