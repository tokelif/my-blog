export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-4">Elif Tok</h1>
        <p className="text-gray-400 mb-8">
          Electrical & Electronics Engineering Student  
          Minor in Computer Engineering  
          Autonomous Systems • Sensor Fusion • Embedded Systems
        </p>

        {/* ABOUT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed">
            Third-year Electrical and Electronics Engineering student at Ankara University.
            Specialized in ROS2-based autonomous systems, Kalman filter–based sensor fusion,
            and embedded BMS design. Experienced in hardware–software integration for
            autonomous vehicles and electric vehicle systems.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Electronics Captain – Autonomous Vehicle (Unique Category)</h3>
            <p className="text-gray-400 text-sm">2025 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Complete electrical architecture design (low & high voltage systems)</li>
              <li>Active BMS design and embedded control algorithms</li>
              <li>CAN-based communication networks</li>
              <li>Sensor integration (IMU, LiDAR, Encoders, Cameras)</li>
              <li>Hardware–software integration with ROS2</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">ROS2 Autonomous Vehicle Software Developer</h3>
            <p className="text-gray-400 text-sm">Ready Vehicle Category – National Finalist Team</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Kalman Filter-based sensor fusion (IMU + GNSS + Odometry)</li>
              <li>SLAM and perception pipelines (Camera + LiDAR)</li>
              <li>State estimation and localization algorithms in C++</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <p className="text-gray-300">
            ROS2 • C++ • Python • Kalman Filter • SLAM • Sensor Fusion • Linux • Docker •
            Embedded Systems • BMS Design • CAN Communication • MATLAB • LTspice
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex gap-6">
            <a
              href="https://github.com/tokelif"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
            >
              GitHub
            </a>
            <a
              href="mailto:tokelifw@gmail.com"
              className="px-6 py-3 border border-white rounded-lg"
            >
              Email
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

