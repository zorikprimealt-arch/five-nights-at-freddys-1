function ChangeBgCamBackstage () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
function ChangeBgCamStage () {
    tiles.setCurrentTilemap(tilemap`level2`)
    RemovecamStage()
}
function MakeStatic (num: number) {
    Mstatic = num
    Jumpscare = 0
}
function show_office () {
    if (GameRunning == 0) {
        tiles.setCurrentTilemap(tilemap`level3`)
        if (door_closed == 1) {
        	
        } else {
        	
        }
    }
}
function MakeVariablesAtGame () {
    FoxyStage = 1
    CanMakeToEnd = 1
    AIShared = 999
    FreddyInOffice = 0
    AnimPosFreddy = 4
    AnimPosBonnie = 4
    AnimPosChica = 4
    energy = 100
    current_cam = 4
    door_closed = 0
    hour = 0
    info.setScore(0)
    is_looking_at_cams = 0
    _static = 0
    CamsUpd = 0
    Clock.sayText("" + hour + ":00")
    Clock.setPosition(80, 25)
}
browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (CanMakeToEnd == 0) {
        blockSettings.writeNumber("Night", 1)
        MakeVariablesAtGame()
        GameRunning = 0
        Mstatic = 0
        Night = 1
        pause(1000)
        sprites.destroy(title)
        sprites.destroy(GameSelection)
        ConfForNight(1)
        tiles.setCurrentTilemap(tilemap`level4`)
    }
})
function ChangeBgCamhallway () {
    if (door_closed == 1) {
    	
    } else {
    	
    }
    tiles.setCurrentTilemap(tilemap`level2`)
    RemovecamHallway()
}
function FoxyMove () {
    // Перевірка умови скримера
    if (FoxyStage == 3) {
        FoxyStage = 4
        OfficeDoorsCheck("Foxy")
    } else if (FoxyStage == 2) {
        FoxyStage = 3
    } else if (FoxyStage == 1) {
        FoxyStage = 2
    }
}
function ChicaMove () {
    // Перевірка умови скримера
    if (AnimPosChica == 1) {
        OfficeDoorsCheck("Chica")
        AnimPosChica = 0
    } else if (AnimPosChica == 2) {
        AnimPosChica = 1
    } else if (AnimPosChica == 4) {
        AnimPosChica = 2
    }
}
function BonnieMove () {
    // Перевірка умови скримера
    if (AnimPosBonnie == 1) {
        OfficeDoorsCheck("Bonnie")
        AnimPosBonnie = 0
    } else if (AnimPosBonnie == 2) {
        AnimPosBonnie = 1
    } else if (AnimPosBonnie == 4) {
        AnimPosBonnie = 2
    }
}
function ConfForNight (text: number) {
    if (GameRunning == 0) {
        night1 = blockSettings.readNumber("Night")
        if (text == 1) {
            BonnieAI = 0
            ChicaAI = 0
            FoxyAI = 0
            FreddyAI = 0
        } else if (text == 2) {
            BonnieAI = 2
            ChicaAI = 1
            FoxyAI = 0
            FreddyAI = 0
        } else if (text == 3) {
            BonnieAI = 3
            ChicaAI = 4
            FoxyAI = 2
            FreddyAI = 1
        } else if (text == 4) {
            BonnieAI = 4
            ChicaAI = 6
            FoxyAI = 5
            FreddyAI = 2
        } else if (text == 5) {
            BonnieAI = 7
            ChicaAI = 9
            FoxyAI = 8
            FreddyAI = 5
        }
    }
}
function AI (Aminatronic: number) {
    if (GameRunning == 0) {
        ChanceFoxy = randint(1, 20)
        ChanceFreddy = randint(1, 20)
        ChanceBonnie = randint(1, 20)
        ChanceChica = randint(1, 20)
        // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
        if (ChanceFreddy <= FreddyAI) {
            // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
            if (FreddyInOffice == 0) {
                MoveAnim("Freddy")
                music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
            }
        }
        // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
        if (ChanceChica <= ChicaAI) {
            // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
            if (ChicaInOffice == 0) {
                MoveAnim("Chica")
                music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
            }
        }
        // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
        if (ChanceBonnie <= BonnieAI) {
            // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
            if (BonnieInOffice == 0) {
                MoveAnim("Bonnie")
                music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
            }
        }
        // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
        if (ChanceFoxy <= FoxyAI) {
            // Випадковий шанс на рух (наприклад, 40% кожну ітерацію)
            if (FoxyInOffice == 0) {
                MoveAnim("Foxy")
                music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
            }
        }
    }
}
function LightsOut () {
	
}
browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (CanMakeToEnd == 0) {
        if (blockSettings.readNumber("Night") == 1 || (blockSettings.readNumber("Night") == 2 || (blockSettings.readNumber("Night") == 3 || (blockSettings.readNumber("Night") == 4 || blockSettings.readNumber("Night") == 5)))) {
            Night = blockSettings.readNumber("Night")
            MakeVariablesAtGame()
            GameRunning = 0
            Mstatic = 0
            pause(1000)
            sprites.destroy(title)
            sprites.destroy(GameSelection)
            ConfForNight(Night)
            tiles.setCurrentTilemap(tilemap`level5`)
        } else {
            blockSettings.writeNumber("Night", 1)
            MakeVariablesAtGame()
            GameRunning = 0
            Mstatic = 0
            Night = 1
            pause(1000)
            sprites.destroy(title)
            sprites.destroy(GameSelection)
            ConfForNight(1)
            tiles.setCurrentTilemap(tilemap`level4`)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameRunning == 0) {
        LightsOn = 0
        if (is_looking_at_cams == 1) {
            show_office()
            is_looking_at_cams = 0
            tiles.setCurrentTilemap(tilemap`level3`)
        } else {
            show_cam_view()
            is_looking_at_cams = 1
        }
    }
})
function FreddyMove () {
    // Перевірка умови скримера
    if (AnimPosFreddy == 1) {
        AnimPosFreddy = 0
        OfficeDoorsCheck("Freddy")
    } else if (AnimPosFreddy == 2) {
        AnimPosFreddy = 1
    } else if (AnimPosFreddy == 4) {
        AnimPosFreddy = 2
    }
}
function MoveAnim (text2: string) {
    if (GameRunning == 0) {
        // Перевірка умови скримера
        if (text2 == "Freddy") {
            FreddyMove()
        } else if (text2 == "Chica") {
            ChicaMove()
        } else if (text2 == "Bonnie") {
            BonnieMove()
        } else if (text2 == "Foxy") {
            FoxyMove()
        }
    }
}
function RemovecamStage () {
    // Малюємо інтерфейс камери
    if (!(AnimPosFreddy == 4)) {
        tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosChica == 4)) {
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosBonnie == 4)) {
        tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
    }
}
function ChangeBgCamPiratecove () {
    tiles.setCurrentTilemap(tilemap`level4`)
    if (FoxyStage == 2) {
    	
    } else if (FoxyStage == 3) {
    	
    } else if (FoxyStage == 4) {
    	
    }
}
function MakeVariablesAtStart () {
    GameRunning = 1
    title = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    GameSelection = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Clock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    title = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Buttons = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    // Керування дверима на клавішу A
    player_target = sprites.create(img`
        . 
        `, SpriteKind.Player)
    PlayMenuSound = 1
}
function usePower () {
    // Якщо двері закриті, енергія витрачається швидше
    if (LightsOn == 1) {
        energy += -0.51
        info.setScore(energy)
    }
    // Якщо двері закриті, енергія витрачається швидше
    if (door_closed == 1) {
        energy += -0.208
        info.setScore(energy)
    }
    // Якщо двері закриті, енергія витрачається швидше
    if (is_looking_at_cams == 1) {
        energy += -0.104
        info.setScore(energy)
    }
    energy += -0.064
    info.setScore(energy)
    readaboutusage = 1
    // Якщо енергія закінчилася — темрява і програш
    if (energy <= -1) {
        tiles.setCurrentTilemap(tilemap`level5`)
        info.setScore(energy)
        energy = 0
        GameRunning = 1
        NoPower = 1
        color.setColor(11, color.rgb(13, 44, 83))
        color.setColor(13, color.rgb(10, 15, 30))
        color.setColor(5, color.rgb(76, 72, 3))
        color.setColor(2, color.rgb(3, 12, 3))
        color.setColor(1, color.rgb(100, 100, 100))
        color.setColor(12, color.rgb(225, 225, 225))
        color.setColor(4, color.rgb(60, 60, 60))
        MakePowerOutMusic()
        if (door_closed == 1) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 169, 109, 255, 44, 600, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            door_closed = 0
        }
        // Play all frequency bands simultaneously
        pause(15000)
        LightFlickOnOff = 1
        NoPower = 0
    }
}
function RemovecamHallway () {
    // Малюємо інтерфейс камери
    if (!(AnimPosFreddy == 1)) {
        tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosChica == 1)) {
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosBonnie == 1)) {
        tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
    }
}
function OfficeDoorsCheck (text22: string) {
    if (GameRunning == 0) {
        if (text22 == "Freddy") {
            Check("Freddy")
        } else if (text22 == "Bonnie") {
            Check("Bonnie")
        } else if (text22 == "Chica") {
            Check("Chica")
        } else if (text22 == "Foxy") {
            Check("Foxy")
        }
    }
}
function Check (text3: string) {
    if (GameRunning == 0) {
        if (text3 == "Freddy") {
            FreddyInOffice = 1
        } else if (text3 == "Bonnie") {
            if (door_closed == 1) {
                BonnieInOffice = 1
            } else {
                BonnieInOffice = 2
            }
        } else if (text3 == "Chica") {
            if (door_closed == 1) {
                ChicaInOffice = 1
            } else {
                ChicaInOffice = 2
            }
        } else if (text3 == "Foxy") {
            if (door_closed == 1) {
                FoxyInOffice = 1
            } else {
                FoxyInOffice = 2
            }
        }
    }
}
// Тут можна додати логіку повернення кнопок дверей
function show_cam_view () {
    CamsUpd = 1
}
browserEvents.S.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (GameRunning == 0) {
        // Якщо двері закриті, енергія витрачається швидше
        if (is_looking_at_cams == 0) {
            // Якщо двері закриті, енергія витрачається швидше
            if (door_closed == 1) {
                // Якщо двері закриті, енергія витрачається швидше
                if (LightsOn == 1) {
                    LightsOn = 0
                } else {
                    LightsOn = 1
                    // Якщо двері закриті, енергія витрачається швидше
                    if (FreddyInOffice >= 1) {
                    	
                    }
                    // Якщо двері закриті, енергія витрачається швидше
                    if (ChicaInOffice >= 1) {
                    	
                    }
                    // Якщо двері закриті, енергія витрачається швидше
                    if (BonnieInOffice >= 1) {
                    	
                    }
                }
            } else if (LightsOn == 1) {
                LightsOn = 0
            } else {
                LightsOn = 1
                // Якщо двері закриті, енергія витрачається швидше
                if (ChicaInOffice >= 1) {
                	
                }
                // Якщо двері закриті, енергія витрачається швидше
                if (FreddyInOffice >= 1) {
                	
                }
                // Якщо двері закриті, енергія витрачається швидше
                if (BonnieInOffice >= 1) {
                	
                }
            }
        }
    } else if (NoPower == 1) {
        // Якщо двері закриті, енергія витрачається швидше
        if (LightsOn == 1) {
            LightsOn = 0
        } else {
            LightsOn = 1
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameRunning == 0) {
        tiles.setCurrentTilemap(tilemap`level3`)
        if (is_looking_at_cams == 1) {
            if (current_cam == 4) {
                current_cam = 1
                show_cam_view()
            } else if (current_cam == 3) {
                current_cam = 4
                show_cam_view()
            } else if (current_cam == 2) {
                current_cam = 3
                show_cam_view()
            } else {
                current_cam = 2
                show_cam_view()
            }
        }
    }
})
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    game.splash("Q/SPACE: Toggle cameras. E: Close/Open doors. S: Check lights (hold)")
})
function JumpScareAndEnd (text4: string) {
    Wait15S = 1
    GameRunning = 1
    _static = 0
    AnimPosFreddy = 6
    ChanceFreddy = 0
    current_cam = 0
    is_looking_at_cams = 0
    energy = 999
    info.setScore(energy)
    tiles.setCurrentTilemap(tilemap`level5`)
    color.setPalette(
    color.originalPalette
    )
    hour = 0
    if (text4 == "Freddy") {
        Jumpscare = 1
    } else if (text4 == "Bonnie") {
        Jumpscare = 2
    } else if (text4 == "Chica") {
        Jumpscare = 3
    } else if (text4 == "Foxy") {
        Jumpscare = 4
    }
}
function RemovecamDinningarea () {
    // Малюємо інтерфейс камери
    if (!(AnimPosFreddy == 2)) {
        tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosChica == 2)) {
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(5, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`transparency16`)
    }
    // Малюємо інтерфейс камери
    if (!(AnimPosBonnie == 2)) {
        tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`transparency16`)
    }
}
browserEvents.E.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (GameRunning == 0) {
        if (is_looking_at_cams == 0) {
            LightsOn = 0
            tiles.setCurrentTilemap(tilemap`level3`)
            if (door_closed == 1) {
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 169, 109, 255, 44, 600, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                door_closed = 0
            } else {
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 169, 109, 255, 44, 600, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                door_closed = 1
            }
        }
    }
})
function MakePowerOutMusic () {
	
}
function ChangeBgCamDinningarea () {
    tiles.setCurrentTilemap(tilemap`level2`)
    RemovecamDinningarea()
}
let Lout = 0
let randStatic = 0
let makeWhite = 0
let FreddyWait = 0
let Wait15S = 0
let LightFlickOnOff = 0
let NoPower = 0
let readaboutusage = 0
let PlayMenuSound = 0
let player_target: Sprite = null
let Buttons: Sprite = null
let LightsOn = 0
let FoxyInOffice = 0
let BonnieInOffice = 0
let ChicaInOffice = 0
let ChanceChica = 0
let ChanceBonnie = 0
let ChanceFreddy = 0
let ChanceFoxy = 0
let FreddyAI = 0
let FoxyAI = 0
let ChicaAI = 0
let BonnieAI = 0
let night1 = 0
let Clock: Sprite = null
let CamsUpd = 0
let _static = 0
let is_looking_at_cams = 0
let hour = 0
let current_cam = 0
let energy = 0
let AnimPosChica = 0
let AnimPosBonnie = 0
let AnimPosFreddy = 0
let FreddyInOffice = 0
let AIShared = 0
let CanMakeToEnd = 0
let FoxyStage = 0
let door_closed = 0
let Jumpscare = 0
let Mstatic = 0
let GameSelection: Sprite = null
let title: Sprite = null
let GameRunning = 0
let Night = 0
Night = blockSettings.readNumber("Night")
GameRunning = 1
GameRunning = 1
scene.setBackgroundColor(15)
pause(1000)
let WarningScreen = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
WarningScreen.sayText("    Warning!            This game is a fanmade game by zorob742.")
color.Brighten.startScreenEffect(1000)
color.FadeToBlack.startScreenEffect(1000)
pause(5000)
sprites.destroy(WarningScreen)
color.clearFadeEffect()
MakeVariablesAtStart()
title.sayText("Five          Nights           At      Freddys")
title.setPosition(31, 59)
GameSelection.setPosition(41, 109)
if (blockSettings.readNumber("Night") == 1 || (blockSettings.readNumber("Night") == 2 || (blockSettings.readNumber("Night") == 3 || (blockSettings.readNumber("Night") == 4 || blockSettings.readNumber("Night") == 5)))) {
    GameSelection.sayText("New Game (D)         Continue (G) (Night " + Night + ")         Controls (F)")
} else {
    GameSelection.sayText("New Game (D)          Controls (F)")
}
tiles.setCurrentTilemap(tilemap`level1`)
MakeStatic(99999999999)
forever(function () {
    if (GameRunning == 0) {
        if (FoxyInOffice == 1) {
            FoxyInOffice = 0
            pause(3000)
            FoxyStage = 1
            FoxyInOffice = 0
        } else if (FoxyInOffice == 2) {
            pause(8000)
            if (door_closed == 1) {
                FoxyStage = 1
                FoxyInOffice = 0
            } else if (door_closed == 0) {
                FoxyInOffice = 0
                JumpScareAndEnd("Foxy")
            }
        }
    }
})
forever(function () {
    if (GameRunning == 0) {
        if (FreddyInOffice == 1) {
            // Якщо двері закриті, енергія витрачається швидше
            if (is_looking_at_cams == 1) {
                // Якщо двері закриті, енергія витрачається швидше
                if (current_cam != 1) {
                    pause(15000)
                    JumpScareAndEnd("Freddy")
                } else {
                    pause(1)
                    FreddyWait += 1
                }
            }
        }
    }
})
forever(function () {
    if (GameRunning == 0) {
        if (ChicaInOffice == 1) {
            ChicaInOffice = 0
            pause(3000)
            AnimPosChica = 4
            ChicaInOffice = 0
        } else if (ChicaInOffice == 2) {
            pause(8000)
            if (door_closed == 1) {
                AnimPosChica = 4
                ChicaInOffice = 0
            } else if (door_closed == 0) {
                ChicaInOffice = 0
                JumpScareAndEnd("Chica")
            }
        }
    }
})
forever(function () {
    if (CanMakeToEnd == 1) {
        pause(90000)
        sprites.destroy(Clock)
        hour += 1
        Clock = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        Clock.setPosition(80, 25)
        Clock.sayText("" + hour + ":00")
        if (hour == 2) {
            BonnieAI += 1
        }
        if (hour == 3) {
            BonnieAI += 1
            ChicaAI += 1
            FoxyAI += 1
        }
        if (hour == 4) {
            BonnieAI += 1
            ChicaAI += 1
            FoxyAI += 1
        }
        if (hour >= 6) {
            CanMakeToEnd = 0
            GameRunning = 1
            Night += 1
            Wait15S = 1
            hour += 0
            Clock.setPosition(80, 75)
            Clock.sayText("" + hour + ":00")
            makeWhite = 1
            pause(750)
            blockSettings.writeNumber("Night", Night)
            color.FadeToBlack.startScreenEffect(3000)
        }
    }
})
forever(function () {
    if (GameRunning == 0) {
        if (BonnieInOffice == 1) {
            BonnieInOffice = 0
            pause(3000)
            AnimPosBonnie = 4
            BonnieInOffice = 0
        } else if (BonnieInOffice == 2) {
            pause(8000)
            if (door_closed == 1) {
                AnimPosBonnie = 4
                BonnieInOffice = 0
            } else if (door_closed == 0) {
                BonnieInOffice = 0
                JumpScareAndEnd("Bonnie")
            }
        }
    }
})
forever(function () {
    pause(5000)
    if (GameRunning == 0) {
        AI(1)
    }
})
forever(function () {
    if (Mstatic >= 1) {
        for (let index = 0; index < Mstatic; index++) {
            pause(100)
            randStatic = randint(1, 4)
            if (randStatic == 1) {
            	
            } else if (randStatic == 2) {
            	
            } else if (randStatic == 3) {
            	
            } else if (randStatic == 4) {
            	
            }
        }
        Mstatic = 0
    }
})
forever(function () {
    if (GameRunning == 0) {
        if (CamsUpd == 1) {
            CamsUpd = 0
        }
        if (is_looking_at_cams == 1) {
            if (current_cam == 4) {
                ChangeBgCamStage()
            } else if (current_cam == 3) {
                ChangeBgCamPiratecove()
            } else if (current_cam == 2) {
                ChangeBgCamDinningarea()
            } else if (current_cam == 1) {
                ChangeBgCamhallway()
            }
        }
    }
})
forever(function () {
    if (GameRunning == 0) {
        pause(1000)
        usePower()
    }
})
forever(function () {
    if (GameRunning == 0) {
        if (FreddyWait == 15000) {
            FreddyInOffice = 0
            AnimPosFreddy = 1
            FreddyWait = 0
        }
    }
})
forever(function () {
    if (Wait15S == 1) {
        pause(15000)
        game.reset()
    }
})
forever(function () {
    if (makeWhite == 1) {
        color.setColor(1, color.rgb(244, 244, 244))
    }
})
forever(function () {
    if (Lout == 1) {
        pause(randint(5000, 15000))
        Lout = 0
        music.setVolume(9999)
        music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
        pause(randint(5000, 15000))
        music.play(music.createSong(hex`0046000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100030607080400050001060c000d0001061000110003060708`), music.PlaybackMode.InBackground)
        pause(randint(2000, 4000))
        JumpScareAndEnd("Freddy")
    }
})
forever(function () {
    if (LightFlickOnOff == 1) {
        for (let index = 0; index < 25; index++) {
            pause(randint(100, 300))
            pause(randint(100, 300))
        }
        Lout = 1
        LightFlickOnOff = 0
        LightsOut()
    }
})
forever(function () {
    if (Jumpscare >= 1) {
        if (Jumpscare == 1) {
            pause(333)
            pause(150)
            CanMakeToEnd = 0
            pause(183)
            MakeStatic(30)
        } else if (Jumpscare == 2) {
            pause(333)
            pause(150)
            CanMakeToEnd = 0
            pause(183)
            MakeStatic(30)
        } else if (Jumpscare == 3) {
            pause(333)
            pause(150)
            CanMakeToEnd = 0
            pause(183)
            MakeStatic(30)
        } else if (Jumpscare == 4) {
            pause(333)
            pause(150)
            CanMakeToEnd = 0
            pause(183)
            MakeStatic(30)
        }
    }
})
