"use client"

export function MapEmbed() {
  return (
    <div className="w-full h-[300px] md:h-[320px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124396.3920174057!2d77.5262514972656!3d13.010993799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11666cd7e741%3A0x60ce02a4bbe1ebd5!2sHope%26Heal%20Physiotherapy%20Clinic%20An%20Advance%20and%20Best%20Clinic%20%26%20Home%20Visits%20near%20me%20in%20Ramamurthy%20nagar!5e0!3m2!1sen!2sin!4v1770193463470!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
