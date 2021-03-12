using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Chat_Test.Hubs;


namespace Chat_Test.Hubs
{

    /// <summary>
    /// implement your hub logic here
    /// </summary>
    
    public class ChatHub:Hub    {
        

        public async Task SendMessage(string username,string message)
        {
            await Clients.All.SendAsync("Receivedmessage",new { user = username, message = message });
        }
      
        
    }

   
}
