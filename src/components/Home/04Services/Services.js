"use client";
import { Poppins } from "next/font/google";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Load the Poppins font with specific weights
const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Multiple weights for different elements
});

const services = [
  {
    title: "Software Development",
    icon: "/Home/services/sd.png",
    description: (
      <>
        <p>
          Need quick, dynamic, and scalable eCommerce marketplace solutions? From design to
          functionality, we ensure that your business can establish and manage successful online
          marketplaces. We focus on creating engaging user experiences, robust vendor management,
          and seamless transactions.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Craft dynamic, scalable eCommerce marketplaces focusing on engaging user experiences,
            robust vendor management, and seamless transactions.
          </li>
          <li>
            End-to-end eCommerce solutions to efficiently establish and manage online marketplaces.
          </li>
          <li>Ensure scalability to grow and adapt to changing market demands.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Product Development",
    icon: "/Home/services/product-development.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Web App Development",
    icon: "/Home/services/app-development.png",
    description: (
      <>
        <p>
          Need quick, dynamic, and scalable eCommerce marketplace solutions? From design to
          functionality, we ensure that your business can establish and manage successful online
          marketplaces. We focus on creating engaging user experiences, robust vendor management,
          and seamless transactions.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Craft dynamic, scalable eCommerce marketplaces focusing on engaging user experiences,
            robust vendor management, and seamless transactions.
          </li>
          <li>
            End-to-end eCommerce solutions to efficiently establish and manage online marketplaces.
          </li>
          <li>Ensure scalability to grow and adapt to changing market demands.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Mobile App Development",
    icon: "/Home/services/mobile-app-development.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cloud App Development",
    icon: "/Home/services/cloud-app.png",
    description: (
      <>
        <p>
          Need quick, dynamic, and scalable eCommerce marketplace solutions? From design to
          functionality, we ensure that your business can establish and manage successful online
          marketplaces. We focus on creating engaging user experiences, robust vendor management,
          and seamless transactions.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Craft dynamic, scalable eCommerce marketplaces focusing on engaging user experiences,
            robust vendor management, and seamless transactions.
          </li>
          <li>
            End-to-end eCommerce solutions to efficiently establish and manage online marketplaces.
          </li>
          <li>Ensure scalability to grow and adapt to changing market demands.</li>
        </ul>
      </>
    ),
  },
  {
    title: "AI & Gen AI",
    icon: "/Home/services/chat-app.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Analytics and Visualization",
    icon: "/Home/services/data.png",
    description: (
      <>
        <p>
          Need quick, dynamic, and scalable eCommerce marketplace solutions? From design to
          functionality, we ensure that your business can establish and manage successful online
          marketplaces. We focus on creating engaging user experiences, robust vendor management,
          and seamless transactions.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Craft dynamic, scalable eCommerce marketplaces focusing on engaging user experiences,
            robust vendor management, and seamless transactions.
          </li>
          <li>
            End-to-end eCommerce solutions to efficiently establish and manage online marketplaces.
          </li>
          <li>Ensure scalability to grow and adapt to changing market demands.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Headless CMS",
    icon: "/Home/services/cms-system.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "QA and Testing",
    icon: "/Home/services/test-tube.png",
    description: (
      <>
        <p>
          Need quick, dynamic, and scalable eCommerce marketplace solutions? From design to
          functionality, we ensure that your business can establish and manage successful online
          marketplaces. We focus on creating engaging user experiences, robust vendor management,
          and seamless transactions.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Craft dynamic, scalable eCommerce marketplaces focusing on engaging user experiences,
            robust vendor management, and seamless transactions.
          </li>
          <li>
            End-to-end eCommerce solutions to efficiently establish and manage online marketplaces.
          </li>
          <li>Ensure scalability to grow and adapt to changing market demands.</li>
        </ul>
      </>
    ),
  },
  {
    title: "UI/UX Design",
    icon: "/Home/services/ui-ux-design.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "IT Consulting",
    icon: "/Home/services/it-consulting.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Digital Marketing",
    icon: "/Home/services/digital-marketing.png",
    description: (
      <>
        <p>
          Looking to manage and operate multiple online stores efficiently or expand your presence?
          With a unified backend, we can help streamline product management, order processing, and
          analytics across various stores.
        </p>
        <ul className="list-disc ml-5 custom-list">
          <li>
            Streamline product management, order processing, and analytics across multiple stores.
          </li>
          <li>Efficiently manage diverse product offerings.</li>
          <li>Expand your presence with a broader audience.</li>
        </ul>
      </>
    ),
  },
];

const ServiceGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs and state for custom scrollbar
  const scrollContainerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const scrollbarContainerRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Function to handle the scroll sync when dragging the custom scrollbar
  const handleScrollbarDrag = (e) => {
    e.preventDefault(); // Prevent default dragging behavior
    isDraggingRef.current = true;

    const scrollbar = scrollbarRef.current;
    const scrollContainer = scrollContainerRef.current;
    const scrollbarContainer = scrollbarContainerRef.current;

    if (!scrollContainer || !scrollbarContainer) return; // Null check

    const scrollbarMaxY = scrollbarContainer.clientHeight - scrollbar.clientHeight;
    const startY = e.clientY;
    const initialTop = scrollbar.offsetTop; // Store the initial top position

    const moveScrollbar = (moveEvent) => {
      if (!isDraggingRef.current) return;

      const deltaY = moveEvent.clientY - startY;
      const newTop = Math.min(Math.max(0, initialTop + deltaY), scrollbarMaxY);

      // Update scrollbar position
      scrollbar.style.transform = `translateY(${newTop}px)`;

      // Calculate the new scroll position for the content
      const scrollPercentage = newTop / scrollbarMaxY;
      scrollContainer.scrollTop =
        scrollPercentage * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mousemove", moveScrollbar);
      document.removeEventListener("mouseup", stopDragging);
    };

    document.addEventListener("mousemove", moveScrollbar);
    document.addEventListener("mouseup", stopDragging);
  };

  // Sync custom scrollbar with the content scroll
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollbarContainer = scrollbarContainerRef.current;

    if (!scrollContainer || !scrollbarContainer || !scrollbar) return; // Null check

    const scrollPercentage =
      scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    const scrollbarMaxY = scrollbarContainer.clientHeight - scrollbar.clientHeight;
    const scrollbarPosition = scrollPercentage * scrollbarMaxY;

    scrollbar.style.transform = `translateY(${scrollbarPosition}px)`;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`flex flex-col max-w-full mx-auto px-4 py-20 space-y-8 ${pop.className} rounded-t-3xl`}
      style={{
        background:
          "linear-gradient(279.59deg, rgba(135, 198, 250, 0.7), rgba(195, 210, 249, 0.7) 62.02%, hsla(51, 41%, 97%, 0.7))",
      }}
    >
      {/* Heading and Paragraph Centered */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-xl md:text-4xl font-bold text-[#071f54]">
          On-Demand eCommerce Development Solutions
        </h2>
        <p className="mt-4 text-[14px] md:text-lg text-[#4e5158cc]">
          Get super-fast deliveries for your business requirements with Brainvire as your trusted
          eCommerce development company
        </p>
      </div>

      {/* Spacer */}
      <div className="mt-8"></div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* Services List */}
        <div className="md:w-1/2 w-full">
          {/* For large screens */}
          <div className="hidden md:flex flex-col space-y-4">
            <div className="flex">
              <div
                ref={scrollContainerRef}
                className="h-[350px] w-full space-y-4 overflow-y-auto"
                style={{ position: "relative", scrollbarWidth: "none" }}
              >
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={index}
                      className={`cursor-pointer p-4 border rounded-lg transition-all duration-300 ease-in-out ${
                        isActive ? "bg-[#071f54] border-[#071f54]" : "bg-white border-gray-300"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Existing SVG icon */}
                          <svg
                            width="16"
                            height="21"
                            viewBox="0 0 16 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 8.15948C16 3.65315 12.4183 0 8 0C3.58174 0 0 3.65315 0 8.15948C0 10.7867 1.21712 13.1237 3.10821 14.6161L8.67023 20.3994C9.4278 21.1871 10.719 20.3625 10.323 19.3438L9.5731 17.4147C9.33971 16.8144 9.72995 16.1548 10.3448 15.9628C13.619 14.9407 16 11.8337 16 8.15948Z"
                              fill={isActive ? "white" : "#a3b9c9"}
                            />
                          </svg>
                          <h3
                            className={`text-[20px] font-medium ${
                              isActive ? "text-white" : "text-[#1d1926]"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        {/* Accordion Sign */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className={`${isActive ? "text-white" : "text-[#1d1926]"}`}
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.646 14.854a.5.5 0 0 1-.708-.708L9.793 10l-3.855-3.854a.5.5 0 1 1 .708-.708l4.147 4.146a.5.5 0 0 1 0 .708l-4.147 4.146z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* Custom Scrollbar */}
              <div
                ref={scrollbarContainerRef}
                className="relative w-[10px] h-[350px] bg-gray-300 ml-4 rounded-full"
              >
                <div
                  ref={scrollbarRef}
                  className="w-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full cursor-pointer transition-transform"
                  style={{
                    height: scrollbarContainerRef.current
                      ? `${
                          (scrollContainerRef.current.clientHeight /
                            scrollContainerRef.current.scrollHeight) *
                          scrollbarContainerRef.current.clientHeight
                        }px`
                      : "50px", // Provide a default value if the ref is not available
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  onMouseDown={handleScrollbarDrag}
                ></div>
              </div>
            </div>
          </div>

          {/* For small screens - Accordion */}
          <div className="md:hidden flex flex-col space-y-4">
            {/* Wrap the list in a scrollable container with max-height */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      className={`w-full text-left p-4 flex items-center justify-between ${
                        isActive ? "bg-[#071f54] text-white" : "bg-white text-[#1d1926]"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Existing SVG icon */}
                        <svg
                          width="16"
                          height="21"
                          viewBox="0 0 16 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8.15948C16 3.65315 12.4183 0 8 0C3.58174 0 0 3.65315 0 8.15948C0 10.7867 1.21712 13.1237 3.10821 14.6161L8.67023 20.3994C9.4278 21.1871 10.719 20.3625 10.323 19.3438L9.5731 17.4147C9.33971 16.8144 9.72995 16.1548 10.3448 15.9628C13.619 14.9407 16 11.8337 16 8.15948Z"
                            fill={isActive ? "white" : "#a3b9c9"}
                          />
                        </svg>
                        <h3 className="text-[14px] font-medium">{service.title}</h3>
                      </div>
                      {/* Accordion Sign */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`transform transition-transform duration-200 ${
                          isActive ? "rotate-90" : ""
                        }`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.646 14.854a.5.5 0 0 1-.708-.708L9.793 10l-3.855-3.854a.5.5 0 1 1 .708-.708l4.147 4.146a.5.5 0 0 1 0 .708l-4.147 4.146z"
                        />
                      </svg>
                    </button>
                    {/* Accordion Content */}
                    <AnimatePresence initial={false} mode="wait">
                      {isActive && (
                        <motion.div
                          className="p-4 bg-white text-[#4e5158cc] text-[14px] space-y-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Added icon before the title */}
                          <div className="flex items-center space-x-4 mb-4">
                            <img
                              src={service.icon}
                              alt={service.title}
                              width={46}
                              height={46}
                              className="w-[46px] h-[46px]"
                            />
                            <h3 className={`text-[20px] font-bold text-black`}>{service.title}</h3>
                          </div>
                          {service.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Description for large screens */}
        <div className="md:w-1/2 w-full md:pl-8 flex flex-col justify-center hidden md:flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="bg-white p-6 shadow-lg rounded-lg flex-grow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Added icon before the title */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={services[activeIndex].icon}
                  alt={services[activeIndex].title}
                  width={46}
                  height={46}
                  className="w-[46px] h-[46px]"
                />
                <h3 className={`text-[20px] font-bold text-black`}>{services[activeIndex].title}</h3>
              </div>
              <div className={`text-[#4e5158cc] text-[14px] space-y-4`}>
                {services[activeIndex].description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Include the custom CSS for the list markers */}
      <style jsx>{`
        .custom-list li::marker {
          font-size: 1.2em; /* Adjust the size as needed */
          color: #4e5158cc; /* Optional: Set the bullet color */
        }
      `}</style>
    </div>
  );
};

export default ServiceGrid;
