ESX = nil
local ui = true

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
    end

    SetNuiFocus(ui, ui)
end)

RegisterNetEvent("nubdev_react:show_ui")
AddEventHandler("nubdev_react:show_ui", function()
    SetNuiFocus(not ui, not ui)
    SendNUIMessage({
        action = "display",
        payload = {
            ui = not ui
        }
    })

    ui = not ui
end)

RegisterNUICallback('set_position_up', function(data,cb)
    local ped = GetPlayerPed(-1)
    local ped_coords = GetEntityCoords(ped)

    SetEntityCoords(ped, ped_coords)

    cb({status = "success"})
end)