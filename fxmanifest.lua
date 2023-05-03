fx_version 'adamant'

game 'gta5'

description 'NUBDev NUI React'

version '1.0.0'

server_scripts {
	'server/main.lua'
}

client_scripts {
	'client/main.lua'
}


ui_page "react/build/index.html"

files {
	"react/build/**",
}

client_script "@esx_chat/menu.lua"