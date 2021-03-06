class BookmarksController < ApplicationController
  protect_from_forgery :except => [:create]
  def index
    @seeds = User.all
    if user_signed_in?
      @lists = List.where(user_id: current_user.id)
      @others = List.where.not(user_id: current_user.id)
    end
    @gernes = Gerne.all
    gon.bookmarks = @lists
    gon.others = @others
    gon.gernes = @gernes
  end

  def new
    list = List.new
    @gernes = Gerne.all
  end

  def create
    @list = List.new(bookmark_params)
    @list.save
    redirect_to action: :index
  end

  def destroy
    bookmark = List.find(params[:id])
    bookmark.destroy
    redirect_to action: :index 
  end

  private
  def bookmark_params
    params.permit(:name, :url, :gerne, :reason).merge(user_id: current_user.id)
  end
end
