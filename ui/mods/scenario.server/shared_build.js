var newBuildScenario = {

    "/pa/units/heroes/abilities/lightning_storm/lightning_storm.json":["wizard_abilities", 0, { row: 2, column: 0 }],
    "/pa/units/heroes/abilities/seeking_blast/seeking_blast.json":["wizard_abilities", 0, { row: 2, column: 1 }],

    "/pa/units/heroes/abilities/smite/smite.json":["paladin_abilities", 0, { row: 2, column: 0 }],
    "/pa/units/heroes/abilities/healing_aura/healing_aura.json":["paladin_abilities", 0, { row: 2, column: 1 }],
    "/pa/units/heroes/abilities/summon_angel/summon_angel.json":["paladin_abilities", 0, { row: 2, column: 2 }],


    "/pa/units/heroes/abilities/ballista/ballista.json":["engineer_abilities", 0, { row: 2, column: 2 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuildScenario);
}