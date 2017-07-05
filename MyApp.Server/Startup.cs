using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyApp.Server.Startup))]
namespace MyApp.Server
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
