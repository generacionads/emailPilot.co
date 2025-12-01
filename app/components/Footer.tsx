import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-10">
      <div className="bg-primary text-white rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <div className="mb-10">
            <span className="font-display text-3xl font-bold tracking-tight">
              EmailPilot
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 font-sans font-medium text-white/90">
            <Link 
              href="/aviso-legal" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              href="/privacidad" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              href="/cookies" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Política de Cookies
            </Link>
          </div>

          <div className="w-full max-w-2xl border-t border-white/20 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl gap-4 font-sans text-sm text-white/70">
            
            <p>
              © {currentYear} EmailPilot. Todos los derechos reservados.
            </p>

            <p>
              Diseñado por{' '}
              <a 
                href="https://generacionads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-green-200 transition-colors"
              >
                Generación Ads
              </a>
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}