import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-xl font-semibold text-foreground">МБОУ Школа №16</span>
            </div>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                О школе
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Галерея
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Школа №16
              </h1>
              <p className="text-xl text-muted-foreground mb-2">г. Нефтекамск</p>
              <p className="text-lg text-muted-foreground mb-8">
                Современное образовательное учреждение с богатыми традициями и инновационным подходом к обучению
              </p>
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/8e555bfb-c151-44c6-b31a-deaf02356c16/files/6442072c-1815-477e-b3ab-5d3df13c184f.jpg"
                alt="МБОУ Школа №16"
                className="w-full h-[400px] object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">О школе</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Опытные педагоги</h3>
              <p className="text-muted-foreground">
                Квалифицированный преподавательский состав с многолетним опытом работы
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Качественное образование</h3>
              <p className="text-muted-foreground">
                Современные образовательные программы и методики обучения
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                <Icon name="Trophy" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Достижения</h3>
              <p className="text-muted-foreground">
                Победы в олимпиадах и конкурсах различного уровня
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-sm border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Наша миссия</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              МБОУ Школа №16 г. Нефтекамска — это современное образовательное учреждение, 
              которое создает условия для всестороннего развития личности каждого ученика.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Мы стремимся воспитать образованных, творческих и ответственных граждан, 
              готовых к успешной жизни в современном обществе. Наша школа сочетает 
              традиционные ценности образования с инновационными методами обучения.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://cdn.poehali.dev/projects/8e555bfb-c151-44c6-b31a-deaf02356c16/files/6442072c-1815-477e-b3ab-5d3df13c184f.jpg"
                alt="Здание школы"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">Здание школы</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://cdn.poehali.dev/projects/8e555bfb-c151-44c6-b31a-deaf02356c16/files/b072942e-4def-4f71-8cf2-1ad840360edd.jpg"
                alt="Учебные классы"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">Учебные классы</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://cdn.poehali.dev/projects/8e555bfb-c151-44c6-b31a-deaf02356c16/files/6fe230c7-35b0-4963-89dd-c188ff8a3dca.jpg"
                alt="Библиотека"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">Библиотека</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            <span className="text-lg font-semibold text-foreground">МБОУ Школа №16</span>
          </div>
          <p className="text-muted-foreground text-sm">
            г. Нефтекамск, Республика Башкортостан
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
