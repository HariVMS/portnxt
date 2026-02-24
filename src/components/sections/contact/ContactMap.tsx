export default function ContactMap() {
  return (
    <div className="w-full h-[450px] overflow-hidden bg-slate-100 border-t border-slate-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.7598101757017!2d77.244227!3d11.497243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI5JzUwLjEiTiA3N8KwMTQnMzkuMiJF!5e0!3m2!1sen!2sin!4v1771942936775!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Port NxT Digital Solutions Location"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
    </div>
  );
}
