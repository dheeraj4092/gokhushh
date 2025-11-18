'use client'

import { ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerStagger, } from "@/components/ui/hero-video"
import Button from "@/components/ui/Button"

const GokhushHeroVideo = () => {
  return (
    <ContainerScroll 
      className="bg-gradient-to-b from-brand-black via-gokhush-dark to-brand-black text-center text-white"
    >
      <ContainerStagger viewport={{ once: false }}>
        <ContainerAnimated animation="top">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            See <span className="text-gokhush-green">Gokhush</span> in Action
          </h2>
        </ContainerAnimated>
        
        <ContainerAnimated animation="blur" className="my-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Experience how riders earn credits, drivers keep 100% of their fares,
            <br className="hidden md:block" />
            and businesses reach customers—all through our innovative ad-supported platform
          </p>
        </ContainerAnimated>

        <ContainerAnimated
          animation="bottom"
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button variant="primary" size="lg">
            Download App
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerInset className="mx-4 md:mx-8">
        <video
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          className="relative z-10 block h-auto max-h-full max-w-full object-contain align-middle rounded-2xl shadow-2xl shadow-gokhush-green/20"
          poster="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=800&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </ContainerInset>
    </ContainerScroll>
  )
}

const GokhushDriverVideo = () => {
  return (
    <ContainerScroll
      className="bg-gradient-to-br from-gokhush-dark via-brand-black to-gokhush-dark text-center text-white"
    >
      <ContainerStagger>
        <ContainerAnimated animation="left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Zero Commission Means
          </h2>
        </ContainerAnimated>
        
        <ContainerAnimated animation="right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gokhush-green">
            40% More Earnings for Drivers
          </h2>
        </ContainerAnimated>

        <ContainerAnimated animation="z" className="my-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            🚗 Keep 100% of your fares
            <br />
            💰 Earn more per ride than traditional platforms
            <br />
            📱 Smart routing and ride management
          </p>
        </ContainerAnimated>

        <ContainerAnimated
          animation="blur"
          className="flex justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            Start Driving
          </Button>
          <Button variant="outline" size="lg">
            See Earnings Calculator
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerInset insetXRange={[30, 0]} className="mx-4 md:mx-8">
        <video
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          className="relative z-10 block h-auto max-h-full max-w-full object-contain align-middle rounded-2xl shadow-2xl shadow-gokhush-green/20"
          poster="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/4877839/4877839-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </ContainerInset>
    </ContainerScroll>
  )
}

const GokhushRiderVideo = () => {
  return (
    <ContainerScroll
      className="bg-gradient-to-b from-brand-black to-gokhush-dark text-center text-white"
    >
      <ContainerStagger>
        <ContainerAnimated animation="top">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Watch Ads, Earn Credits
          </h2>
        </ContainerAnimated>
        
        <ContainerAnimated animation="top">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gokhush-green">Save 25%</span> on Every Ride
          </h2>
        </ContainerAnimated>

        <ContainerAnimated animation="blur" className="my-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            ✨ Earn ₹15-25 credits per ride by watching 3-5 short ads
            <br />
            🎯 See only relevant ads based on your route
            <br />
            💸 Enjoy cheaper rides without sacrificing driver earnings
          </p>
        </ContainerAnimated>

        <ContainerAnimated
          animation="bottom"
          className="flex justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            How It Works
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerInset className="mx-4 md:mx-8">
        <video
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          className="relative z-10 block h-auto max-h-full max-w-full object-contain align-middle rounded-2xl shadow-2xl shadow-gokhush-green/20"
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </ContainerInset>
    </ContainerScroll>
  )
}
 
export { GokhushHeroVideo, GokhushDriverVideo, GokhushRiderVideo }
