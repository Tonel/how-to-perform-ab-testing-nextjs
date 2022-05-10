import serviceSource1 from "../src/app/assets/services-1.json"
import serviceSource2 from "../src/app/assets/services-2.json"
import footerSource from "../src/app/assets/footer.json"
import LandingPage1 from "../src/app/components/LandingPage1"
import LandingPage2 from "../src/app/components/LandingPage2"
import Link from "next/link"

export default function Home({ landingPageKey, services, footerLinks }) {
  let landingPageComponent = undefined

  // determining the landing page
  // component based on landingPageKey
  switch (landingPageKey) {
    case "landing-page-1":
      landingPageComponent = <LandingPage1 services={services} footerLinks={footerLinks} />
      break
    case "landing-page-2":
      landingPageComponent = <LandingPage2 services={services} footerLinks={footerLinks} />
      break
  }

  return (
    <>
      <div className={"text-center bg-light"}>
        <div className={"bg-dark"} style={{ color: "white" }}>{`Current landing page: ${landingPageKey}`}</div>
        <div className={"pt-2 pb-2"}>
          <Link href="/" replace={true}>
            <a className="btn btn-secondary">Reload page</a>
          </Link>
        </div>
      </div>
      {landingPageComponent}
    </>
  )
}

export function getStaticProps() {
  // retrieving the footer link list ...
  const footerLinks = footerSource

  // a random number between 1 and 2
  const landingPageIndex = Math.floor(Math.random() * 2) + 1
  // generating the landing page key selector
  const landingPageKey = `landing-page-${landingPageIndex}`

  let services = []

  // displaying different services based on the
  // current landing page
  switch (landingPageIndex) {
    // in a real-world scenario retrieve the service list
    // by calling an API or performing a query
    case 1:
      services = serviceSource1
      break
    case 2:
      services = serviceSource2
      break
  }

  return {
    props: {
      landingPageKey: landingPageKey,
      services: services,
      footerLinks: footerLinks,
    },
    revalidate: 60,
  }
}
