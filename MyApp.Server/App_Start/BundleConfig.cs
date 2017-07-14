using System.Web;
using System.Web.Optimization;

namespace MyApp.Server
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
      BundleTable.EnableOptimizations = true;
      bundles.IgnoreList.Clear();

      bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
									"~/Scripts/jquery-2.2.4.js"));

			bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
									"~/Scripts/jquery.validate*"));

			bundles.Add(new ScriptBundle("~/bundles/chartjs").Include(
									"~/libs/Chart.bundle.min.js",
									"~/libs/Chart.min.js"));

      bundles.Add(new ScriptBundle("~/bundles/datetimepicker").Include(
                  "~/Scripts/moment.js",
                  "~/Scripts/boostrap-datetimepicker.js"));

			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
									"~/Scripts/modernizr-*"));
			
			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
								"~/Scripts/bootstrap.js",
								"~/Scripts/respond.js"));

      bundles.Add(new ScriptBundle("~/bundles/scroll").Include(
                "~/Scripts/perfect-scrollbar.jquery.js",
                "~/Scripts/perfect-scrollbar.js"));

      bundles.Add(new StyleBundle("~/bundles/defaults").Include(
								"~/libs/bootstrap.min.css",
								"~/libs/font-awesome.min.css",
								"~/css/Site.css"));
		}
	}
}