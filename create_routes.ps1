$routes = @(
    "src/app/careers",
    "src/app/blogs",
    "src/app/contact-us",
    "src/app/services/ui-ux-graphic-design",
    "src/app/services/cloud",
    "src/app/services/block-chain",
    "src/app/services/devops",
    "src/app/services/salesforce",
    "src/app/services/web-development",
    "src/app/services/mobile-app-development",
    "src/app/services/ai-development",
    "src/app/services/erp-development",
    "src/app/services/crm-development",
    "src/app/services/offshore-development",
    "src/app/services/iot-development",
    "src/app/services/search-engine-optimization",
    "src/app/services/email-marketing",
    "src/app/services/social-media-marketing",
    "src/app/services/pay-per-click",
    "src/app/services/content-marketing",
    "src/app/services/conversion-rate-optimization",
    "src/app/industries/healthcare",
    "src/app/industries/finance",
    "src/app/industries/education",
    "src/app/industries/real-estate",
    "src/app/industries/retail"
)

$content = @"
import PageLayout from "@/components/layout/PageLayout";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageLayout title="Page Under Construction">
      <div className="py-20 text-center">
        <p className="text-xl text-slate-500">This page is currently being built. Please check back later.</p>
      </div>
    </PageLayout>
  );
}
"@

foreach ($route in $routes) {
    if (!(Test-Path $route)) {
        New-Item -ItemType Directory -Path $route -Force | Out-Null
        Write-Host "Created directory: $route"
    }
    
    $filePath = Join-Path $route "page.tsx"
    if (!(Test-Path $filePath)) {
        Set-Content -Path $filePath -Value $content
        Write-Host "Created file: $filePath"
    }
}
