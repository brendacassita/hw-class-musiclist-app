Rails.application.routes.draw do
namespace :api do
  get           'songs',                      to:'songs#index'       
  get           'songs/:id',                  to:'songs#show'        
  post          'songs',                      to:'songs#create'      
  put           'songs/:id',                  to:'songs#update'
  delete        'songs/:id',                  to:'songs#destroy'
  end
end

 # resources :songs do