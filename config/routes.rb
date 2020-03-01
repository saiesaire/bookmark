Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'bookmarks#index'

  resources :bookmarks
  post 'bookmarks/:id' => 'bookmarks#create'
end
