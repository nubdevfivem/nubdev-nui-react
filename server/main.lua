ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


RegisterCommand("notify", function(source, args, rawCommand)
    TriggerClientEvent("pNotify:SendNotification",-1, {
        text = "Restart "..GetCurrentResourceName().." successfully !!!",
        type = "success",
        queue = "esx_skin",
        timeout = 3000,
        layout = "CenterLeft"
    })
end, true) 

RegisterCommand("show_ui", function(source, args, rawCommand)
    TriggerClientEvent("nubdev_react:show_ui",source)
end, true) 