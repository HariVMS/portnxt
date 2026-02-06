export default function ContactMap() {
    return (
        <div className="w-full h-[450px] overflow-hidden bg-slate-100 border-t border-slate-200">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8407478832966!2d77.30894237619226!3d28.414002990666687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd99a5e8e34b%3A0x6d9536d5073145e6!2sMakelink%20Innovation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709628000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhatti Mines Location"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
        </div>
    );
}
