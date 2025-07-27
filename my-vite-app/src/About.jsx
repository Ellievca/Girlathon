import React from 'react';

function RetroWindowButtons() {
  const buttonCommon = {
    width: '40px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #333',
    backgroundColor: '#ddd',
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    cursor: 'pointer',
    userSelect: 'none',
    boxShadow: 'inset 1px 1px 0 #fff, inset -1px -1px 0 #aaa',
    marginRight: '8px',
    borderRadius: '0 0 4px 4px',
  };

  const closeBtn = {
    ...buttonCommon,
    backgroundColor: '#e81123',
    color: 'white',
    borderColor: '#a80000',
    boxShadow: 'inset 1px 1px 0 #f1707a, inset -1px -1px 0 #a80000',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={closeBtn} title="Close">×</div>
      <div style={buttonCommon} title="Minimize">—</div>
      <div style={buttonCommon} title="Maximize">☐</div>
    </div>
  );
}

function BioCard({ name, role, desc, favorites=[], linkedin }) {
  return (
    <div
      style={{
        background: '#fff0f5',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        margin: '1rem',
        maxWidth: '250px',
        textAlign: 'center',
        fontFamily: 'Comic Sans MS, cursive',
        border: '2px solid #ffb6c1',
      }}
    >
      <h3 style={{ color: '#ff69b4', fontSize: '1.4rem' }}>{name}</h3>
      <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>{role}</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{desc}</p>

      {favorites.length > 0 && (
        <div style={{ marginTop: '0.75rem' }}>
          <h4 style={{ color: '#d63384', fontSize: '1rem', marginBottom: '0.3rem' }}>Favorite beauty products 💅</h4>
          <ul style={{ listStyleType: '💖', paddingLeft: '1.2rem', fontSize: '0.85rem', textAlign: 'left' }}>
            {favorites.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.75rem',
            color: '#0077b5',
            textDecoration: 'none',
            fontSize: '0.85rem',
          }}
        >
          🔗 LinkedIn
        </a>
      )}
    </div>
  );
}

function About() {
  return (
    <div 
      style={{
        height: 'fit-content',
        width: '70vw',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fce4ec',
        color: '#4a4a4a',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: '40px',
          backgroundColor: '#EDAFB8',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          gap: '0.75rem',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          color: 'white',
        }}
      >
        <RetroWindowButtons />
        <span style={{ fontWeight: 'bold' }}>💽 about_the_team.txt</span>
      </div>

      {/* Page content */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ff69b4', textShadow: '2px 2px #fff' }}>
          💖 meet the girlies 💖
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>
          We’re <b>Team Girlathon</b> — coders, designers, and beauty lovers building a glam AI chatbot for the CS Girlies Hackathon 💅
        </p>

        {/* Team bios */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
          <BioCard
            name="Ellie Carron"
            role="Frontend Dev 👩‍💻"
            desc="Ellie designed the aesthetic, created the layout, and built the chatbot UI with React + Vite!"
            favorites={["TIRTIR Mask Fit Cushion", "Tower 28 Lip Gloss", "Fenty Diamond Bomb Highlighter"]}
            linkedin="https://www.linkedin.com/in/elliecarron/"
          />
          <BioCard
            name="Aneesha Nayak"
            role="Backend AI Dev 🛠"
            desc="Aneesha implemented the FastAPI backend and made the chatbot respond with OpenAI magic."
            favorites={["Sol de Janeiro Cheirosa 62", "Elf Lash 'N Roll Mascara", "Sephora Coconut Face Masks"]}
            linkedin="https://www.linkedin.com/in/aneeshanayak/"
          />
          <BioCard
            name="Ava Romero"
            role="UI/UX Designer 🎨"
            desc="Ava styled each page with love, pastel vibes, and perfect pixel details to match the theme."
            favorites={["Fenty Eaze Drop Skin Tint", "Eloise Bloom Blush", "Afterglow Lip Balm"]}
            linkedin="https://www.linkedin.com/in/ava-romero-643672291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          <BioCard
            name="Vianna Huynh"
            role="Full Stack Floater 🌈"
            desc="Vianna contributed across frontend and backend, helping glue it all together with charm!"
            favorites={["Fenty Skin Tint", "Merit Blush", "Merit Concealer"]}
            linkedin="https://www.linkedin.com/in/viannahuynh/"
          />
        </div>

        {/* Tech stack */}
        <div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '450px', margin: '3rem auto 1rem auto' }}>
          <h2 style={{ color: '#ff69b4' }}>💻 How We Built This</h2>
          <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1rem' }}>
            <li><b>React + Vite</b> for a super fast, modern frontend</li>
            <li><b>FastAPI (Python)</b> for backend API & chatbot logic</li>
            <li><b>OpenAI GPT-3.5</b> for glam responses</li>
            <li><b>Render</b> for backend hosting</li>
            <li><b>Vercel</b> for frontend deployment</li>
            <li><b>Figma + Canva</b> for mockups & icon design</li>
          </ul>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#999' }}>
          Built with ☕, sparkle ✨, and teamwork 💗
        </p>
      </div>
    </div>
  );
}

export default About;
