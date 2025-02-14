import ArrowRight from '@/assets/arrow-right.svg'

export const CallToAction = () => {
  return <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
    <div className="container">
      <div className="section-heading">

        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts .</p>
      </div>
      <div className="flex justify-center gap-2 mt-10">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>
            Learn more
          </span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
};
