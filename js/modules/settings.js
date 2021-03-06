

function GetSetting(setting_name) {
    let sn = setting_name;
    return Promise.resolve(
        $.post("/sys/api/profile", 
        {
            'user': "1",
            'pwd':"",
            's':sn
        })
    );
}
function SetSetting(setting_name, setting_val) {
    let sn = setting_name;
    let sv = setting_val;
    $.post("/sys/api/profile", 
    {
        'user': "1",
        'pwd':"",
        's':sn,
        'v':sv
    });
}
export function Settings() {
    let settingsContainer = ".settings-container";
    $(document).on("change", "#setting-show-context-menu", function() {
        SetSetting("ShowContextMenu", $(this).is(":checked")?"1":"0");
    });
    $(document).on("click", ".settings-tab", function(e) {
        $(".settings-tab").removeClass("tab-selected");
        $(this).addClass("tab-selected");
    });
    $(document).on("click", ".s-tab-fileman", async (e) => {
        let setting_show_context_menu = await GetSetting("ShowContextMenu");
        
        console.log(setting_show_context_menu);
        $.get("/page/tabs/settings-account", {'setting-show-context-menu': setting_show_context_menu} , function(data) {
            $(settingsContainer).html(data);
        });
        
    });
    $(document).on("click", ".s-tab-account", async (e) => {
        let setting_show_context_menu = await GetSetting("ShowContextMenu");
        
        console.log(setting_show_context_menu);
        $.get("/page/tabs/settings-dashboard", {'setting-show-context-menu': setting_show_context_menu} , function(data) {
            $(settingsContainer).html(data);
            LoadChart1();   
        });
    });
    $(document).on("click", ".s-tab-about",async (e) => {
        $(settingsContainer).html("About");
    });
    $(document).on("click", ".s-tab-back", function(e) {
        window.location.href = "../index";
    });

}

function LoadChart1() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 20, 30]
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        }
    });

}
