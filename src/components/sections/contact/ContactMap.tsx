export default function ContactMap() {
  return (
    <div className="w-full h-[450px] overflow-hidden bg-slate-100 border-t border-slate-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12883.99158109154!2d77.24402616428439!3d11.501088250509468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1771934997331!5m2!1sen!2sin"
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
