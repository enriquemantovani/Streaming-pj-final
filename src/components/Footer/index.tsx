export default function Footer() {

    return(

        <footer className="bg-blue-900 px-8 py-12 border-t border-blue-800 text-sm text-blue-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Idioma e Legendas</a></li>
                <li><a href="#" className="hover:underline">Imprensa</a></li>
                <li><a href="#" className="hover:underline">Privacidade</a></li>
                </ul>
            </div>
            <div>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Entre em contato</a></li>
                <li><a href="#" className="hover:underline">Carreiras</a></li>
                <li><a href="#" className="hover:underline">Ajuda</a></li>
                </ul>
            </div>
            <div>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Conta</a></li>
                <li><a href="#" className="hover:underline">Centro de mídia</a></li>
                <li><a href="#" className="hover:underline">Termos de uso</a></li>
                </ul>
            </div>
            <div>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Cookies</a></li>
                <li><a href="#" className="hover:underline">Informações legais</a></li>
                </ul>
            </div>
            </div>
            <p className="text-center text-blue-400">&copy; byron solutions Todos os direitos reservados.</p>
        </footer>


    )


}