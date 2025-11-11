import { Cookie, Shield, Settings, Globe } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl">
              Tarkwa (PHD) Ltd trading as Tarkwa Auto Transport
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                This is the Cookie Policy for Tarkwa (PHD) Ltd, accessible from www.tarkwaautotransport.co.uk.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg">
                  <Cookie className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d] mt-0">What Are Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg">
                  <Globe className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d] mt-0">How We Use Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg">
                  <Settings className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d] mt-0">Disabling Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">The Cookies We Set</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Email newsletters related cookies</h3>
                  <p className="text-gray-700">
                    This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Forms related cookies</h3>
                  <p className="text-gray-700">
                    When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">Site preferences cookies</h3>
                  <p className="text-gray-700">
                    In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#e53e3e] p-3 rounded-lg">
                  <Shield className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-[#1a365d] mt-0">Third Party Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                  </p>
                </div>
              </div>

              <div className="space-y-4 ml-16">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#1a365d]">Google Analytics</h3>
                  <p className="text-gray-700 mb-3">
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                  </p>
                  <p className="text-gray-700 text-sm">
                    For more information on Google Analytics cookies, see the official Google Analytics page.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#1a365d]">Testing and Optimization</h3>
                  <p className="text-gray-700">
                    From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#1a365d]">Analytics and Statistics</h3>
                  <p className="text-gray-700">
                    As we provide services, it's important for us to understand statistics about how many of the visitors to our site actually make enquiries and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and service costs to ensure the best possible price.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#1a365d]">Social Media Cookies</h3>
                  <p className="text-gray-700">
                    We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">More Information</h2>
              <p className="mb-4">
                Hopefully that has clarified things for you and as was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              <p className="mb-4">
                However, if you are still looking for more information then you can contact us through one of our preferred contact methods:
              </p>
              <div className="bg-[#2d4a7c] p-6 rounded-lg">
                <p className="mb-2">
                  <strong className="text-[#e53e3e]">Email:</strong> <a href="mailto:info@tarkwa.co.uk" className="hover:text-[#e53e3e] transition-colors">info@tarkwa.co.uk</a>
                </p>
                <p className="mb-2">
                  <strong className="text-[#e53e3e]">Phone:</strong> <a href="tel:07778878862" className="hover:text-[#e53e3e] transition-colors">07778 878862</a> (Mobile)
                </p>
                <p>
                  <strong className="text-[#e53e3e]">Phone:</strong> <a href="tel:01295711897" className="hover:text-[#e53e3e] transition-colors">01295 711897</a> (Office)
                </p>
              </div>
            </div>

            <div className="text-center text-gray-600 text-sm">
              <p>Last Updated: November 2025</p>
              <p className="mt-2">Tarkwa (PHD) Ltd | Company Number: 09606346</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
