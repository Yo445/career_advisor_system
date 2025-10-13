import { Component ,signal,computed } from '@angular/core';
import { FormsModule , NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';



export interface Language {
    name: string;
    proficiency: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [

    FormsModule,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    // --- SKILL State ---
    isModalOpen = signal(false); // Fix for 'isModalOpen' error
    skills = signal<string[]>(['HTML', 'CSS', 'JavaScript']);
    skillNameInput = signal('');
    yearsExperienceInput = signal('');
    modalMessage = signal(''); // Fix for 'modalMessage' error
    hasError = signal(true); // Fix for 'hasError' error
    skillSuggestions = ['Computer Science', 'JavaScript', 'React', 'Software Development', 'Data Analysis'];

    // --- LANGUAGE State ---
    isLanguageModalOpen = signal(false);
    languages = signal<Language[]>([
        { name: 'English', proficiency: 'Fluent' },
        { name: 'Spanish', proficiency: 'Conversational' }
    ]);
    languageNameInput = signal('');
    languageProficiencyInput = signal('');
    languageModalMessage = signal('');
    hasLanguageError = signal(true);
    proficiencyLevels = ['Beginner', 'Conversational', 'Fluent', 'Native'];
    languageOptions = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];


    // --- SKILL Modal Control Methods (Now matching generic HTML names) ---
    openModal() {
        this.isModalOpen.set(true);
        this.skillNameInput.set('');
        this.yearsExperienceInput.set('');
        this.modalMessage.set('');
        this.hasError.set(true); // Reset error state on open
    }

    closeModal() {
        this.isModalOpen.set(false);
    }

    // --- LANGUAGE Modal Control Methods ---
    openLanguageModal() {
        this.isLanguageModalOpen.set(true);
        this.languageNameInput.set('');
        this.languageProficiencyInput.set('');
        this.languageModalMessage.set('');
        this.hasLanguageError.set(true); // Reset error state on open
    }

    closeLanguageModal() {
        this.isLanguageModalOpen.set(false);
    }

    // --- SKILL Interaction Methods ---
    selectSuggestion(suggestion: string) {
        this.skillNameInput.set(suggestion);
    }

    removeSkill(skillToRemove: string) {
        // Filter out the skill to be removed
        this.skills.update(currentSkills => currentSkills.filter(s => s !== skillToRemove));
    }

    saveSkill() {
        const skillName = this.skillNameInput().trim();
        const yearsExperience = this.yearsExperienceInput();

        if (!skillName || !yearsExperience) {
            this.modalMessage.set('Please fill out all required fields.'); // Using generic name
            this.hasError.set(true); // Using generic name
            return;
        }

        const normalizedSkill = skillName.toLowerCase();
        // Check for duplicates
        if (this.skills().map(s => s.toLowerCase()).includes(normalizedSkill)) {
            this.modalMessage.set(`Skill "${skillName}" is already listed.`); // Using generic name
            this.hasError.set(true); // Using generic name
            return;
        }

        this.skills.update(currentSkills => [...currentSkills, skillName]);
        this.modalMessage.set(`Skill "${skillName}" added successfully!`); // Using generic name
        this.hasError.set(false); // Using generic name

        setTimeout(() => this.closeModal(), 1500);
    }

    // --- LANGUAGE Interaction Methods ---
    removeLanguage(languageToRemove: Language) {
        // Filter out the language based on its name
        this.languages.update(currentLangs =>
            currentLangs.filter(l => l.name !== languageToRemove.name)
        );
    }

    saveLanguage() {
        const langName = this.languageNameInput();
        const proficiency = this.languageProficiencyInput();

        if (!langName || !proficiency) {
            this.languageModalMessage.set('Please select a language and proficiency level.');
            this.hasLanguageError.set(true);
            return;
        }

        // Check for duplicates
        if (this.languages().some(l => l.name === langName)) {
            this.languageModalMessage.set(`Language "${langName}" is already listed.`);
            this.hasLanguageError.set(true);
            return;
        }

        this.languages.update(currentLangs => [...currentLangs, { name: langName, proficiency: proficiency }]);
        this.languageModalMessage.set(`Language "${langName}" added successfully!`);
        this.hasLanguageError.set(false);

        setTimeout(() => this.closeLanguageModal(), 1500);
    }

}
