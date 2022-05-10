import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import hero2 from "../assets/images/hero-2.png"
import Link from "next/link"
import Image from "next/image"

export default function Hero2() {
  return (
    <section className="section position-relative bg-warning hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Your Terrific <span className="text-warning font-weight-medium">Landing Page 2</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
                aliquid ex ea commodi consequatur.
              </p>
              <Link href="#services">
                <a className="btn btn-warning">
                  Learn More <span className="ml-2">&darr;</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image
                layout={"responsive"}
                src={hero2.src}
                width={1000}
                height={710}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
