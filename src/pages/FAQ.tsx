import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Can you collect or deliver to auction houses and car dealerships?',
      answer: 'Yes, vehicle collection/delivery can be made from/to auction houses and dealerships (as well as private premises). You will need to ensure that the auction house or dealership have agreed the date and time and will accept or release the vehicle as required.'
    },
    {
      question: 'Is my vehicle insured during transit?',
      answer: 'Tarkwa provides goods in transit (GiT) insurance to £100k. It is your responsibility to ensure the vehicle from the date of collection. We recommend confirming with your insurance provider that your policy covers transportation.'
    },
    {
      question: 'Is my vehicle insured to be moved when being loaded or unloaded onto the trailer?',
      answer: 'Tarkwa operates under a motor trade insurance policy which means we are insured to move your vehicle as required. This covers the vehicle during loading and unloading operations.'
    },
    {
      question: 'Vehicle inspections prior to collection and upon delivery?',
      answer: 'The owner of the vehicle should organise any mechanical inspection required before collection however Tarkwa can/will provide photographic external evidence at collection and again at delivery. This ensures complete documentation of your vehicle\'s condition.'
    },
    {
      question: 'How long does a delivery take?',
      answer: 'Most vehicles will be collected and delivered on the same day, the distance to be travelled will determine the exact time in transit. If it is necessary to stop overnight the accommodation charge will be added to the price.'
    },
    {
      question: 'What types of vehicles can you transport?',
      answer: 'We specialise in transporting saloons, SUVs, classic cars, prestige cars, and small vans. Your vehicle must weigh 4.5 tonnes or less, be a maximum of 2 metres wide, and no longer than 6 metres.'
    },
    {
      question: 'Do you provide location updates during transport?',
      answer: 'Yes, we provide regular communication throughout the transport process including location updates during the journey. You\'ll always know where your vehicle is.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We provide UK-wide vehicle transportation services. Based in South Northamptonshire near Brackley, we can collect and deliver vehicles anywhere across the United Kingdom.'
    },
    {
      question: 'How do I book a transport?',
      answer: 'You can book by calling us on 07778 878862 (mobile) or 01295 711897 (office), or by using our contact form. We\'ll discuss your requirements and agree on collection and delivery dates and times that suit you.'
    },
    {
      question: 'What happens if there\'s damage during transit?',
      answer: 'Your vehicle is covered by our goods in transit insurance up to £100,000. We take photographic evidence before collection and after delivery. In the unlikely event of any issues, we have comprehensive insurance coverage.'
    },
    {
      question: 'Can you transport non-running vehicles?',
      answer: 'Yes, our equipment includes hydraulic and electric winches specifically designed to safely load non-running vehicles. Please inform us when booking if your vehicle is not running.'
    },
    {
      question: 'Do you offer a same-day service?',
      answer: 'Yes, most vehicles are collected and delivered on the same day. The exact timing depends on the distance to be covered. We agree specific time slots for both collection and delivery.'
    },
    {
      question: 'Are there cancellation charges?',
      answer: 'A cancellation charge will be applied if the cancellation is within 24 hours of the collection date. There will be a full price cancellation charge if cancellation occurs at or after the time of collection.'
    }
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Find answers to common questions about our vehicle transportation service
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] group border border-transparent hover:border-[#e53e3e]/20">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-[#e53e3e] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)] group-hover:rotate-12">
                          <HelpCircle className="text-white transition-transform duration-300 group-hover:scale-110" size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-[#1a365d] transition-colors duration-300 group-hover:text-[#e53e3e]">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h2 className="text-2xl font-bold mb-4 text-[#1a365d] text-center">
                Still Have Questions?
              </h2>
              <p className="text-center text-gray-700 mb-6 leading-relaxed">
                If you can't find the answer you're looking for, please don't hesitate to contact us directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07778878862"
                  className="bg-[#e53e3e] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-[0_4px_12px_rgba(229,62,62,0.4)] hover:-translate-y-1"
                >
                  Call: 07778 878862
                </a>
                <a
                  href="tel:01295711897"
                  className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-[0_4px_12px_rgba(26,54,93,0.4)] hover:-translate-y-1"
                >
                  Office: 01295 711897
                </a>
                <a
                  href="mailto:info@tarkwa.co.uk"
                  className="bg-white hover:bg-gray-100 text-[#1a365d] border-2 border-[#1a365d] px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-[0_4px_12px_rgba(26,54,93,0.3)] hover:-translate-y-1 hover:border-[#e53e3e]"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
