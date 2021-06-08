import Section from './Section'

function Diagnostic() {
  return (
    <Section className="lg:flex lg:justify-evenly h-full lg:h-screen">
      <div className="lg:flex lg:items-center lg:flex-row flex flex-col items-center py-4">
        <img
          className="lg:pb-16 lg:mr-2 md:w-8/12"
          src="https://cdn.discordapp.com/attachments/691321186797486100/841300484718985236/Capture.PNG"
        />
        <img
          className="md:w-8/12"
          src="https://cdn.discordapp.com/attachments/691321186797486100/841300494025490443/Capture2.PNG"
        />
      </div>
    </Section>
  )
}

export default Diagnostic
