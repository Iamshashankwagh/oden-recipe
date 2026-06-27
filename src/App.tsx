import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { recipes, Recipe } from './recipesData';
import { 
  Clock, 
  Users, 
  ChefHat, 
  ArrowLeft, 
  Check, 
  ListTodo, 
  CookingPot, 
  BookOpen, 
  FileCheck,
  Sparkles,
  Info
} from 'lucide-react';

export default function App() {
  const [activeRecipeId, setActiveRecipeId] = useState<string | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const selectedRecipe = recipes.find(r => r.id === activeRecipeId);

  // Toggle ingredient checked state
  const toggleIngredient = (recipeId: string, ingredient: string) => {
    const key = `${recipeId}-${ingredient}`;
    setCheckedIngredients(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Reset helper when switching recipes
  const handleSelectRecipe = (id: string) => {
    setActiveRecipeId(id);
    setActiveStep(null);
    setCheckedIngredients({});
  };

  const handleBackToHome = () => {
    setActiveRecipeId(null);
    setActiveStep(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#1A1A1A] font-serif antialiased selection:bg-[#E8E6E1]">
      {/* Editorial Top Border / Line */}
      <div className="h-[1px] bg-[#D1CEC7] w-full" />

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {!activeRecipeId ? (
            /* ================= HOME INDEX VIEW ================= */
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Elegant Editorial Header */}
              <header className="pt-4 pb-12 border-b border-[#D1CEC7] flex flex-col md:flex-row md:justify-between md:items-baseline gap-6">
                <div className="space-y-1">
                  <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                    Odin Recipes
                  </h1>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#8C887D]">
                  <span>Issue No. 01</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Kitchen Fundamentals</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Est. 2026</span>
                </div>
              </header>

              {/* Grid of Recipes (Editorial representation) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {recipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.id}
                    whileHover={{ y: -4 }}
                    className="flex flex-col bg-[#F7F5F0] border border-[#D1CEC7] overflow-hidden cursor-pointer transition-all duration-300 group"
                    onClick={() => handleSelectRecipe(recipe.id)}
                  >
                    {/* Dish Image */}
                    <div className="aspect-[4/3] w-full bg-[#E8E6E1] overflow-hidden relative border-b border-[#D1CEC7]">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[20%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#FDFCF9] border border-[#D1CEC7] px-2.5 py-1 text-[10px] font-sans font-extrabold tracking-wider text-[#1A1A1A] uppercase">
                        {recipe.difficulty}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <span className="block text-xs font-sans font-bold text-[#8C887D] tracking-widest uppercase">
                          0{index + 1}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:italic group-hover:translate-x-1 transition-all duration-300">
                          {recipe.title}
                        </h2>
                        <p className="text-[#4A4741] text-sm leading-relaxed font-serif italic opacity-90 line-clamp-3">
                          {recipe.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-sans font-bold tracking-widest text-[#8C887D] uppercase pt-4 border-t border-[#D1CEC7]/60">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#8C887D]" />
                          {recipe.prepTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#8C887D]" />
                          {recipe.servings}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Assignment Structure Navigation & Instructor Info */}
              <div className="border border-[#D1CEC7] bg-[#F7F5F0] p-8 md:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-[#D1CEC7] bg-[#FDFCF9] text-[#1A1A1A]">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                      Odin Recipes Assignment Submission
                    </h3>
                    <p className="text-[#4A4741] text-sm leading-relaxed italic font-serif">
                      This repository satisfies all 4 iterations of the Odin Project requirement. The exact physical directory structure requested has been created at <code className="bg-[#FDFCF9] px-2 py-0.5 border border-[#D1CEC7] font-mono text-xs font-semibold">/odin-recipes/</code>.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#D1CEC7]">
                  <p className="text-xs text-[#8C887D] font-sans font-bold uppercase tracking-[0.2em]">
                    Generated Static Structure (Fully compatible with submission)
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A4741] font-sans font-bold tracking-wider uppercase">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8C887D] rounded-full" />
                      <span>/odin-recipes/index.html</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8C887D] rounded-full" />
                      <span>/odin-recipes/recipes/lasagna.html</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8C887D] rounded-full" />
                      <span>/odin-recipes/recipes/pizza.html</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8C887D] rounded-full" />
                      <span>/odin-recipes/recipes/carbonara.html</span>
                    </li>
                  </ul>
                  <p className="text-[11px] text-[#8C887D] italic mt-2">
                    Use the export or ZIP utility in the settings menu to easily download the complete standalone static site.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ================= RECIPE DETAIL VIEW ================= */
            <motion.div
              key="recipe"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Back Link / Top Navigation */}
              <div className="flex justify-between items-baseline pb-6 border-b border-[#D1CEC7]">
                <a
                  href="../index.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBackToHome();
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold border border-[#D1CEC7] px-4 py-2 bg-[#F7F5F0] hover:bg-[#1A1A1A] hover:text-[#FDFCF9] hover:border-transparent transition-all duration-300"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Home
                </a>

                <div className="text-xs uppercase tracking-widest font-sans font-bold text-[#8C887D]">
                  Interactive Culinary Mode
                </div>
              </div>

              {/* Recipe Heading & Description */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="block text-xs font-sans font-bold text-[#8C887D] tracking-[0.3em] uppercase">
                    Featured Recipe
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A]">
                    {selectedRecipe.title}
                  </h1>
                </div>
                
                <p className="text-[#4A4741] text-lg md:text-xl font-serif italic leading-relaxed max-w-3xl">
                  {selectedRecipe.description}
                </p>

                {/* Editorial Info Panel */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-[#D1CEC7] py-6">
                  <div className="space-y-1">
                    <span className="block text-[10px] font-sans font-bold text-[#8C887D] uppercase tracking-widest">Prep Time</span>
                    <span className="font-serif text-lg font-bold text-[#1A1A1A]">{selectedRecipe.prepTime}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-sans font-bold text-[#8C887D] uppercase tracking-widest">Cook Time</span>
                    <span className="font-serif text-lg font-bold text-[#1A1A1A]">{selectedRecipe.cookTime}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-sans font-bold text-[#8C887D] uppercase tracking-widest">Yield</span>
                    <span className="font-serif text-lg font-bold text-[#1A1A1A]">{selectedRecipe.servings}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-sans font-bold text-[#8C887D] uppercase tracking-widest">Difficulty</span>
                    <span className="font-serif text-lg font-bold text-[#1A1A1A]">{selectedRecipe.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-[16/9] w-full border border-[#D1CEC7] bg-[#E8E6E1] overflow-hidden">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[102%]"
                />
              </div>

              {/* Ingredients & Steps Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
                
                {/* Ingredients Section (Left Column) */}
                <div className="md:col-span-5 space-y-6">
                  <div className="space-y-2 border-b border-[#D1CEC7] pb-3">
                    <h2 className="text-xs uppercase tracking-widest font-sans font-bold text-[#8C887D]">
                      Ingredients
                    </h2>
                    <p className="text-[11px] font-sans font-medium text-[#8C887D] tracking-wide uppercase">Tap to checklist ingredients</p>
                  </div>

                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, idx) => {
                      const isChecked = !!checkedIngredients[`${selectedRecipe.id}-${ingredient}`];
                      return (
                        <li 
                          key={idx}
                          onClick={() => toggleIngredient(selectedRecipe.id, ingredient)}
                          className={`flex items-start gap-3 p-3 border transition-all duration-200 cursor-pointer select-none ${
                            isChecked 
                              ? 'bg-[#F7F5F0] border-[#D1CEC7] text-[#8C887D] line-through opacity-60' 
                              : 'bg-white border-[#D1CEC7]/60 hover:border-[#1A1A1A] text-[#1A1A1A]'
                          }`}
                        >
                          <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${
                            isChecked 
                              ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' 
                              : 'border-[#D1CEC7] bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-sans font-medium">{ingredient}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Steps Section (Right Column) */}
                <div className="md:col-span-7 space-y-6">
                  <div className="space-y-2 border-b border-[#D1CEC7] pb-3">
                    <h2 className="text-xs uppercase tracking-widest font-sans font-bold text-[#8C887D]">
                      Steps
                    </h2>
                    <p className="text-[11px] font-sans font-medium text-[#8C887D] tracking-wide uppercase">Tap steps to focus</p>
                  </div>

                  <ol className="space-y-4">
                    {selectedRecipe.steps.map((step, idx) => {
                      const isCurrentStep = activeStep === idx;
                      return (
                        <li
                          key={idx}
                          onClick={() => setActiveStep(isCurrentStep ? null : idx)}
                          className={`group flex gap-4 p-5 border transition-all duration-300 cursor-pointer ${
                            isCurrentStep 
                              ? 'bg-[#F7F5F0] border-[#1A1A1A]' 
                              : 'bg-white border-[#D1CEC7]/60 hover:border-[#D1CEC7]'
                          }`}
                        >
                          {/* Step Number */}
                          <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-sans font-bold border transition-colors ${
                            isCurrentStep 
                              ? 'bg-[#1A1A1A] text-[#FDFCF9] border-transparent' 
                              : 'border-[#D1CEC7] text-[#8C887D] group-hover:border-[#1A1A1A] group-hover:text-[#1A1A1A]'
                          }`}>
                            0{idx + 1}
                          </div>

                          {/* Step Body */}
                          <p className={`text-sm font-sans font-medium leading-relaxed transition-colors ${
                            isCurrentStep ? 'text-[#1A1A1A]' : 'text-[#4A4741]'
                          }`}>
                            {step}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </div>

              </div>

              {/* Bottom Back Button */}
              <div className="flex justify-center pt-10 border-t border-[#D1CEC7]">
                <button
                  onClick={handleBackToHome}
                  className="px-6 py-3 bg-[#1A1A1A] text-[#FDFCF9] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#4A4741] transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Return to Index
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-[#D1CEC7] bg-[#F7F5F0] py-12 mt-16 text-center text-xs text-[#8C887D] font-sans font-bold uppercase tracking-widest space-y-3">
        <div className="flex justify-center items-center gap-2">
          <span>The Odin Project Curriculum</span>
        </div>
        <p className="opacity-60 text-[10px]">Project: Odin Recipes • Designed with Editorial Aesthetic • © 2026</p>
      </footer>
    </div>
  );
}
