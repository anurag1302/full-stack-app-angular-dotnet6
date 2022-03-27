using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:scope")]
    public class ReportController : ControllerBase
    {
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("/report")]
        public IActionResult GetReport()
        {
            return File(System.IO.File.ReadAllBytes(@"C:\Users\anurag.sinha\Desktop\sample\exercise.pdf"),
                "application/pdf");
        }

        [Authorize(Roles = "Admin,Manager")]
        [HttpGet]
        [Route("/reportstatus")]
        public IActionResult GetReportStatus()
        {
            return Ok(new { Status = $"{"Report generated at: "}{DateTime.Now.ToString()}" });
        }
    }
}
